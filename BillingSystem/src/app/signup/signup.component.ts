import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,updateProfile ,updatePhoneNumber} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


interface WALLET {
  balance:number ;  
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

  email = '';
  displayName = '';
  password = '';
  firstname = '';
  lastname = '';
  confirmpassword= '';
  address = '';
  mobilenumber='';
  auth: any;
  wallet:WALLET = {
    balance:0,


  }

  constructor(private router: Router, private activedRoute: ActivatedRoute,private toastr: ToastrService,private http: HttpClient) {}

  ngOnInit() {
    this.auth = getAuth();
  }

  addwallet()  {
    const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.displayName}/Wallet.json`;
    this.http.patch(url,this.wallet).subscribe((response) => {
      this.toastr.success(``);
      }, (error) => {
        this.toastr.error(``);
      });



  }

  signUp() {

    if (this.password !== this.confirmpassword) {
      alert("Passwords don't match");
      return;
    }

  


    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {

        
        
        // User account created
        const user = userCredential.user;
        // Add user information to database
        const database = getDatabase();
        const usersRef = ref(database, 'users/' + this.displayName);
       updateProfile(user,{displayName:this.displayName})
      // updatePhoneNumber(user,{phoneNumber:this.mobilenumber})
        


        set(usersRef, {
          email: user.email,
          displayname: this.displayName,
          firstname: this.firstname,
          lastname: this.lastname,
          address: this.address,
          mobilenumber: this.mobilenumber,
          password: this.password,
          uid: user.uid
        }).then(() => {
          this.addwallet();
          this.toastr.success(`User Created Successfuly`);
          this.router.navigate(['home']);

        }).catch((error) => {
          this.toastr.error(`Error adding user information to the database`);
        });
      })
      .catch((error) => {
        this.toastr.error(`Error adding user information to the database`);
        
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,updateProfile ,updatePhoneNumber} from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
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

  constructor(private router: Router, private activedRoute: ActivatedRoute,private toastr: ToastrService) {}

  ngOnInit() {
    this.auth = getAuth();
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

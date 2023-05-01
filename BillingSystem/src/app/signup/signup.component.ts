import { Component, OnInit } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

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
          alert("User Created Successfuly !!");
          console.log('User information added to database');
          console.log('displayname'+this.displayName);
          this.router.navigate(['home']);

        }).catch((error) => {
          console.log('Error adding user information to database:', error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle error
      });
  }
}

import { Component } from '@angular/core';
import { db } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}
  email = '';
  password = '';

  SignUp()
  {
    this.router.navigate(['signup']);
  }

  signIn()
  {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // The user is signed in.
        const user = userCredential.user;
        alert("User Signed in");
        console.log('User signed in:', user);
        this.router.navigate(['home']);

      })
      .catch((error) => {
        // Handle sign-in errors.
        console.error('Error signing in:', error);
      });
  }



  }


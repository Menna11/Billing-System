import { Component } from '@angular/core';
//import { db } from '../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

const toastConfig: Partial<IndividualConfig> = {
  progressBar: true,
  progressAnimation: 'decreasing',
  tapToDismiss: false,
  closeButton: true,
  enableHtml: true,
  toastClass: 'toast',
 
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private activedRoute: ActivatedRoute,private toastr: ToastrService) {}
  email = '';
  password = '';
 

  SignUp()
  {
    this.router.navigate(['signup']);
  }

  signIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {
        // The user is signed in.
        if (this.email === 'admin@admin.com' && this.password === 'admin123') {
        
          this.toastr.success('Admin Signed in', 'Success', toastConfig);

          this.router.navigate(['admin']);
        } 
        else if (this.email === 'a'|| this.password === 'a')
        {
          this.toastr.success('Please provide your information', 'Fail', toastConfig);
        }
        
        
        else {
          this.toastr.success('User Signed in', 'Success', toastConfig);
          this.router.navigate(['home']);
        }
      })
      .catch((error) => {
        // Handle sign-in errors.
        console.error('Error signing in:', error);
      });
  }



  }


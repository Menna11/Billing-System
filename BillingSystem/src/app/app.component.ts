import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BillingSystem';
  userEmail: string = '';

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        this.userEmail = user.email ?? '';
      } else {
        // No user is signed in.
        this.userEmail = '';
      }
    });
  }

  
goHome()
{
  const auth = getAuth();
  if (auth.currentUser) {
    this.router.navigate(['home']);

  }
  else{
    alert("No User Logged In");

  }

}
 


  LogOut() {
    const auth = getAuth();
    if (auth.currentUser) 
    {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('User signed out');
      this.userEmail = '';
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  else{
    alert("No User Logged In");

  }



  }

}

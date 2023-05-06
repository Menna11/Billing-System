import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'BillingSystem';
  userEmail: string = '';
  showForm: boolean = true;

  constructor(private router: Router, private activedRoute: ActivatedRoute,private toastr: ToastrService) {}
  
  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        this.userEmail = user.email ?? '';
        if (this.userEmail === "admin@admin.com")
        {
        this.router.navigate(['admin']);
      }
     else if (this.userEmail === "service@service.com")
      {
      this.router.navigate(['service']);
    }

      else{
        this.router.navigate(['home']);

      }

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
    this.toastr.warning(`No User Logged In`);

  }

}

wallet()
{
  const auth = getAuth();
  if (auth.currentUser)
  {
    this.router.navigate(['wallet']);
  }
  else {
    this.toastr.warning(`No User Logged In`);
  }
}

searchuser()
{

  this.router.navigate(['adminsearch']);

}
 


  LogOut() {
    const auth = getAuth();
    if (auth.currentUser) 
    {
    signOut(auth).then(() => {
      // Sign-out successful.
      this.toastr.success(`Signed out Successfuly`);
      this.userEmail = '';
      this.router.navigate(['']);
    }).catch((error) => {
      // An error happened.
      this.toastr.error(`Error Signing Out`);
    });
  }
  else{
    this.toastr.warning(`No User Logged In`);

  }
  }
  isAdmin() {
    
    return this.userEmail === 'admin@admin.com';
  }
  isService() {
    
    return this.userEmail === 'service@service.com';
  }
  userwallet()
  {
    this.router.navigate(['adminwallet']);
  }
  adminElec()
  {
    this.router.navigate(['adminelec']);
  }
  addoffer()
  {
    this.router.navigate(['addoffer']);
  }
  viewoffer()
  {
    this.router.navigate(['viewoffer']);
  }
  deleteoffer()
  {
    this.router.navigate(['deleteoffer']);
  }
  

}

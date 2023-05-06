import { Component, OnInit } from '@angular/core';
import   {ActivatedRoute,Router} from '@angular/router';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   username:any;
   UserLogged:boolean=true;
   navigation:boolean=true;
   isCancel=false;

   constructor(private router: Router, private activedRoute: ActivatedRoute) {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      this.username=dn;
    }
    else{
      this.UserLogged=false;
    }
   }

  profile2Nav()
  {
    this.router.navigate(['/Profile2']);
    this.navigation=false;
  }
}

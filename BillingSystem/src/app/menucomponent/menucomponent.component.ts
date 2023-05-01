import { Component, OnInit } from '@angular/core';
import   {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   username:string="User";
   UserLogged:boolean=true;
   navigation:boolean=true;
   isCancel=false;

   constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  profile2Nav()
  {
    this.router.navigate(['/Profile2']);
    this.navigation=false;
  }
}

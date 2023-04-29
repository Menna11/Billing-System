import { Component } from '@angular/core';

@Component({
  selector: 'app-menucomponent',
  templateUrl: './menucomponent.component.html',
  styleUrls: ['./menucomponent.component.css']
})
export class MenucomponentComponent {
   username:string="User";


  UserLogged:boolean=true;
  
}

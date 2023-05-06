import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private activedRoute: ActivatedRoute) {}
  ngOnInit(): void { }

  navigation:boolean=true;

  waterbtn(){
    this.router.navigate(['WaterBill']);
    this.navigation=false;
  };
 
  userProfileNav(){
    this.router.navigate(['/Profile2']);
    this.navigation=false;
  }
  
  homePage(){}

  

}

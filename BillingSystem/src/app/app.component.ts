import { Component, OnInit } from '@angular/core';
import   {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}
  ngOnInit(): void { }

  navigation:boolean=true;

   waterbtn(){
    this.router.navigate(['WaterBill']);
    this.navigation=false;
  };
  title = 'BillingSystem';
  isUser=true;
 

  homePage(){}

  




}

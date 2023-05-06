import { Component,OnInit } from '@angular/core';
import {db} from 'src/app/firebase-config'
import { ref} from "firebase/database";
import { FirebaseService } from '../firebase.service';
import { getAuth } from 'firebase/auth';


@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.css']
})


export class WaterBillComponent implements OnInit
{
  userinfo:any=[];
  waterunit:any;
  unitsconsumed:any;

  bill:any;
  showbtn:any=true;
  status:any;
  
  public dropDownValue = "";
  
  SetDropDownValue(drpValue : any) 
  {
    const auth = getAuth();
    if (auth.currentUser) 
    {
       const dn = auth.currentUser.displayName;
    this.dropDownValue = drpValue.target.value;
    this.fbservice.getwaterbillstatus(dn,this.dropDownValue).subscribe((data:{})=>{
      this.bill=data;})
      if(this.bill.status=="Paid"){
        this.showbtn=false;
      }
    }
  }
  constructor(public fbservice:FirebaseService)
  {
   ref(db);
  }
  ngOnInit() 
  {
    const auth = getAuth();
    if (auth.currentUser) 
    {
       const dn = auth.currentUser.displayName;
       console.log(dn);
       this.fbservice.getUserBill(dn).subscribe((data:{})=>{
        this.userinfo=data;});
        this.fbservice.getwaterunitcost().subscribe((data:{})=>{
          this.waterunit=data;});
    }
  } 
}

 

 



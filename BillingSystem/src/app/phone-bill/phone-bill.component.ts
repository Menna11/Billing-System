import { Component, OnInit } from '@angular/core';
import {db} from 'src/app/firebase-config'
import { ref} from "firebase/database";
import { FirebaseService } from '../firebase.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-phone-bill',
  templateUrl: './phone-bill.component.html',
  styleUrls: ['./phone-bill.component.css']
})
export class PhoneBillComponent implements OnInit{

  ownedphone:any;
  id:any;
  phones:any=[];
  notexist:any;
  phonedetails:any;
  detail:any;

  public dropDownValue = "";
  
  SetDropDownValue(drpValue : any) 
  {
    const auth = getAuth();
    if (auth.currentUser) 
    {
      const dn = auth.currentUser.displayName;
      this.dropDownValue = drpValue.target.value;
      
      if(this.dropDownValue!=null)
      {
      this.detail=this.dropDownValue;
      this.detail='0'+this.detail;
      console.log(this.detail);
      this.fbservice.getownedphonedetails(dn,this.detail).subscribe((data:{})=>{
      this.phonedetails=data;
      console.log(this.phonedetails)});
      }
      
    }
  }
  

  constructor(public fbservice:FirebaseService)
  {
   ref(db);
  }

  ngOnInit(): void {
      const auth = getAuth();
    if (auth.currentUser) 
    {
      const dn = auth.currentUser.displayName;
      for(let i=0;i<4;i++)
      {
        if(this.notexist==false)
        break;
       this.fbservice.getownedphonenumber(dn,i).subscribe((data:{})=>{
        this.ownedphone=data;
        if(this.ownedphone!=null)
        {this.notexist=true;
        this.phones[i]=this.ownedphone;
        }
        else{this.notexist=false;}});
      }


     
      }
    }
      
} 




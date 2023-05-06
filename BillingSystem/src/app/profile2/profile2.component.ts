import { Component, OnInit } from '@angular/core';

import { ProfileAndRowDataService } from '../services/ProfileAndRowData/profile-and-row-data.service';
import { GetCurrentUserService } from '../services/getCurrentUser/get-current-user.service';
import { AddNewPhoneService } from '../services/addNewPhone/add-new-phone.service';

import { user } from '../classes/user';

import { getAuth } from 'firebase/auth';
import { db } from '../firebase-config';
import { ref } from 'firebase/database';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit{
  newPhone=false; //TO control when add new phone is pressed

  isFilterInput=false;
  filterText='';

  isCancel=false; //To know if user clicked cancel from row component
  isAdd=false; //To know if user clicked add from row component

  retrievedData:any; //array to get new phone and servie provider from row using ProfileAndRow Service

  myUser: user = new user;
  filteredPhones:any[]=[];
  filteredService:number[]=[];

  constructor(private profileRowService:ProfileAndRowDataService,
   private getCurrentUserService:GetCurrentUserService,
   private addNewPhoneService:AddNewPhoneService)
  {
   ref(db);
  }

  ngOnInit()
  {
    const auth=getAuth();
    if(auth.currentUser)
    {
      const dn=auth.currentUser.displayName;
      console.log("AUTHHH"+dn)
      this.getPhones(dn);
    }

    this.profileRowService.rowDetails.subscribe(
      data=> //data from row
      {
        this.retrievedData=data;
        console.log('PHONE:'+this.retrievedData[0])
        this.pushNewPhone(this.retrievedData[0])
      }
   
      )
  }

  pushNewPhone(myNewPhone:any)
  {
    this.myUser.ownedPhones.push(myNewPhone);
    var length=this.myUser.ownedPhones.length-1
    this.determineServiceProviers(myNewPhone,length) 
    this.updateUser()
  }

  determineServiceProviers(phone:any,PhonesCounter:any)
  {
    var str=phone.slice(0,3);
    console.log("STR"+str)
    switch(str)
    {
      case '010':
      {
        this.myUser.serviceProviders[PhonesCounter]='Vodafone';
        break;
      }
      case '011':
      {
          this.myUser.serviceProviders[PhonesCounter]='Etisalat';
          break;
      }
      case '012':
      {
        this.myUser.serviceProviders[PhonesCounter]='Orange';  
        break;
      }

    }
  }

  phones:any=[]; //To save phones received from db
  ownedPhonesCounter=0; 
  getPhones(dn:any)
  {
    this.getCurrentUserService.getUserPhones(dn).subscribe(
      (data:{})=>
      {
        //Get phone numbers saved in the db
        console.log("SERVICEEEE"+data)
        this.phones=data;

        for(var i in this.phones)
        {
          console.log(this.ownedPhonesCounter)
          this.myUser.ownedPhones[this.ownedPhonesCounter]=this.phones[i]; //Place data in ownedPhones array of myUser object of user class
          this.determineServiceProviers(this.myUser.ownedPhones[this.ownedPhonesCounter],this.ownedPhonesCounter)
          this.ownedPhonesCounter++;
        }
      }
    );
  }

  isCancelMethod($event:boolean)
  {
    this.isCancel=$event;
    if(this.isCancel==true)
    {
      this.newPhone=false;
    }
  }

  isAddMethod($event:boolean)
  {
    this.isAdd=$event;
    if(this.isAdd==true)
    {
      this.newPhone=false;
    }
  }

  addNewPhone()
  {
    this.newPhone=false;
  }
 
 
 foundIt=false;
  filterMethod()
  { 
   console.log(this.filterText)
   
   for(var x in this.myUser.ownedPhones)
   {
    console.log(this.filterText+'CHECK')
    if((this.filterText==this.myUser.ownedPhones[x])
      ||(this.filterText==this.myUser.serviceProviders[x]))
    {
      this.foundIt=true;
      console.log('Maybe equal'+this.myUser.ownedPhones[x])
      console.log('Maybe equal'+this.myUser.serviceProviders[x])
      this.filteredPhones.push(this.myUser.ownedPhones[x]);
      this.filteredService.push(this.myUser.serviceProviders[x]);

      console.log('1 '+this.filteredPhones[0])
      console.log('2 '+this.filteredService[0])
        
    }
   } 
   this.isFilterInput=false;
  }

updateUser()
{
    
}

}

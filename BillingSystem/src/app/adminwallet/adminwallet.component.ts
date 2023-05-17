import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Component({
  selector: 'app-adminwallet',
  templateUrl: './adminwallet.component.html',
  styleUrls: ['./adminwallet.component.css']
})
export class AdminwalletComponent {
  display!:string ; 
  amount!:number ;  
  userbalance!:number;
  newbalance!:number;
  constructor(private router: Router, private activedRoute: ActivatedRoute,private http: HttpClient) {}
  
  ngOnInit()
  {
   



  }


  getuserbalance():Observable<any>
  {
    
    const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Wallet/Balance.json`;
    return this.http.get(url);



  }

  
  submit()
  {
    this.getuserbalance().subscribe((data)=> {
      this.userbalance = data ; 
      this.newbalance = this.userbalance + this.amount ;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Wallet/Balance.json`;
      this.http.put(url, this.newbalance).subscribe((response) => {
        console.log(response); // log the response to check if the update was successful or not
      }, (error) => {
        console.error(error); // log any errors that occurred
      });



    });
    
  }

}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

interface Bill {
  price: number;
  units: string;
  date:  string;
  id : number;
  status: string;
}
@Component({
  selector: 'app-adminelec',
  templateUrl: './adminelec.component.html',
  styleUrls: ['./adminelec.component.css']
})
export class AdminelecComponent {
  display!: string ; 
  showAddBillFormFlag: boolean = false;
  showBillDataFlag: boolean = true;
  constructor(private router: Router, private activedRoute: ActivatedRoute,private http: HttpClient,private toastr: ToastrService) {}
  bills: Bill[] = [];
  CurrentBillId! :number ; 
  newBill: Bill = {
    price: 0,
    units: '',
    date: '',
    id: 0,
    status: '',
  };

  ngOnInit()
  {
   

  }
  
  
  getuserbills():Observable<Bill[]> {
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Bills/ElecBill.json`;
      return this.http.get<Record<string, Bill>>(url).pipe(
        map(data => Object.values(data).filter((bill: Bill) => bill.status === "unpaid"))
      );
    
  }

  getuserbillid():Observable<any>{
    const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Bills/ElecBill/currentbillid.json`;
    return this.http.get(url);





  }

  submit()
  {
    this.getuserbills().subscribe((billsdata) => {
      this.bills = billsdata;
    });
    this.getuserbillid().subscribe((currentid) => {
      this.CurrentBillId = currentid;
    });




  }

  pay(bill:Bill)
  {
    const confirmed = window.confirm(`Is ${bill.price}LE handed in for bill with id ${bill.id}?`);
    if(confirmed)
    {
    const StatusUrl = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Bills/ElecBill/${bill.id}/status.json`;
    this.http.put(StatusUrl, "\"paid\"").subscribe();
    this.toastr.success(`Payment successful! Bill with id ${bill.id} paid`);
  }
  else 
  {
    this.toastr.error(`please take the cash first`);
  }
 }

addBill()
{
  if(this.display)
  {
    const billid = this.CurrentBillId + 1 ;
  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Bills/ElecBill/${billid}.json`;
  const curid = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${this.display}/Bills/ElecBill/currentbillid.json`;
  const newBillWithId = { ...this.newBill, id: billid };
  this.http.patch(url,newBillWithId).subscribe();
  this.http.put(curid,billid).subscribe();

  this.toastr.success(`Bill added to user`);

  } 
  else 
  {
    this.toastr.error(`Please enter a username to add the bill`);
  }





}
showBillData() {
  this.showBillDataFlag = true;
  this.showAddBillFormFlag = false;
}
showAddBillForm() {
  this.showBillDataFlag = false;
  this.showAddBillFormFlag = true;
}




}

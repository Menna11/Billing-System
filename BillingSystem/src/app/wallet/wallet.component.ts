import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {
  showForm: boolean = false;
  Current!: number;
  visanum = '' ; 
  visapass = '';
  charge! :number; 
  constructor(private http: HttpClient) {}

  ngOnInit()
  {
    this.getWalletAmount().subscribe((data)=>{
      this.Current = data ; 
    });
  }



getWalletAmount(): Observable<any>{
const auth = getAuth();
if(auth.currentUser)
{
  const dn = auth.currentUser.displayName;
  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Wallet/Balance.json`;
  return this.http.get(url);

}
else
{
  console.log('User not authenticated');
  return of(undefined);
}

}
showChargeWalletForm() {
  this.showForm = true;
}

submitVisa()
{
  if(this.visanum==='1234567891234567'&&this.visapass==='123456')
  {
    const auth = getAuth();
    if(auth.currentUser)
{
  const dn = auth.currentUser.displayName;
  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Wallet/Balance.json`;
  this.Current = this.Current + this.charge;
   this.http.put(url,this.Current).subscribe();
   console.log("charged successfuly");

}
else
{
  console.log('User not authenticated');
  
}
    
  }
  else 
  {
    console.log("wrong visa information");
  }
}


}

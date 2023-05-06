iport { Component   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

import { getAuth } from 'firebase/auth';
import { of } from 'rxjs';
import { getDatabase, ref, set,child ,update} from 'firebase/database';
import { db } from '../../firebase-config';

import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { map } from 'rxjs/operators';

const toastConfig: Partial<IndividualConfig> = {
  progressBar: true,
  progressAnimation: 'decreasing',
  tapToDismiss: false,
  closeButton: true,
  enableHtml: true,
  toastClass: 'toast',
 
};

interface User {
  displayname: string;
  email: string;
  // Define other fields as needed
}
interface Bill {
  price: number;
  units: string;
  date:  string;
  id : number;
  status: string;
}

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.css']
})

export class ElectricityBillComponent {
  
  totalUnits = 0;
  user: any;
  balance :any;
  email!: string;
  //bills: any;
  //bills1: any ;
  billamount: any;
  bills: Bill[] = [];
  bills1: Bill[] = [];
  constructor(private http: HttpClient,private toastr: ToastrService) {}

  
  ngOnInit() {
    // Retrieve user data from server
    this.getUserData().subscribe((data) => {
      this.user = data;
      this.balance = data.Wallet.Balance;
      const ar = Object.values(data);
      console.log("test",ar);
      console.log("balance",this.balance);
    });

    this.getUserBillsUnpaid().subscribe((billsdata) => {
      this.bills = billsdata;
      
    
    });

    this.getUserBillsPaid().subscribe((billsdata1) => {
      this.bills1 = billsdata1;
    
    });


  }

 
  getUserBillsUnpaid(): Observable<Bill[]> {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Bills/ElecBill.json`;
      return this.http.get<Record<string, Bill>>(url).pipe(
        map(data => Object.values(data).filter((bill: Bill) => bill.status === "unpaid"))
      );
    } else {
      console.log('User not authenticated');
      alert('No User Logged In');
      return of([]);
    }
  }
  
  
  getUserBillsPaid(): Observable<Bill[]> {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Bills/ElecBill.json`;
      return this.http.get<Record<string, Bill>>(url).pipe(
        map(data => Object.values(data).filter((bill: Bill) => bill.status === "paid"))
      );
    } else {
      console.log('User not authenticated');
      alert('No User Logged In');
      return of([]);
    }
  }

  
  getUserData(): Observable<any> {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}.json`;
      
     /*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/ const userRef = ref(db, `users/${dn}`); //malosh lzma XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  
      return this.http.get<User>(url);
    } else {
      console.log('User not authenticated');
      alert('No User Logged In');
      return of(undefined);
    }
  }
  
  
searchUserByEmail(email: string) {
  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users.json`;
  this.http.get<User>(url).subscribe((data) => {
    const users = Object.values(data); // convert object to array
    const user = users.find((user: User) => user.email === email);
    if (user) {
      const displayName = user.displayname;
      console.log(`User with email ${email} found. Display name: ${displayName}`);
    } else {
      console.log(`User with email ${email} not found.`);
    }
  });
}

Pay(bill: Bill) {
  const auth = getAuth();
  if (auth.currentUser) {
    const dn = auth.currentUser.displayName;

    if (this.balance > bill.price) {
      const newbalance = this.balance - bill.price;
      const WalletUrl = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Wallet/Balance.json`;
      const StatusUrl = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}/Bills/ElecBill/${bill.id}/status.json`;
      this.http.put(WalletUrl,newbalance).subscribe();
      this.http.put(StatusUrl, "\"paid\"").subscribe();
      this.toastr.success(`Payment successful! You paid ${bill.price}LE for ${bill.units} units.`);
    }
    else 
    {
      console.log('Insufficient balance.');
      this.toastr.warning('You have insufficient balance to pay this bill. Please recharge your wallet.', undefined, toastConfig);
    }
  }
  else {
    console.log('User not authenticated');
    alert('No User Logged In');
  }
}
 

}

  submitBill() {
    const auth = getAuth();
    if (auth.currentUser && this.user) {
      const dn = auth.currentUser.displayName;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}.json`;
      const data = { ...this.user, elecunits: this.totalUnits };
      this.http.put(url, data).subscribe(
        () => {
          console.log('Bill submitted successfully');
        },
        (error) => {
          console.log('Error submitting bill:', error);
        }
      );
    } else {
      console.log('User not authenticated');
      alert('No User Logged In');
    }
  }
}

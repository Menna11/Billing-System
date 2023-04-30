import { Component } from '@angular/core';
import { db } from '../../firebase-config';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, set,child ,update} from 'firebase/database';

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.css']
})
export class ElectricityBillComponent {
  totalUnits = 0 ; 
  
  submitBill() {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      const userRef = ref(db, `users/${dn}`);
      set(child(userRef, 'elecunits'), this.totalUnits);
      console.log('Bill submitted successfully');
    } else {

      console.log('User not authenticated');
      alert("No User Logged In");
    }
  }
  
  
 
}


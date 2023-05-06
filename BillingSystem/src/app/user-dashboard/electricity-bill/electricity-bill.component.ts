import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { of } from 'rxjs';
import { getDatabase, ref, set,child ,update} from 'firebase/database';
import { db } from '../../firebase-config';

@Component({
  selector: 'app-electricity-bill',
  templateUrl: './electricity-bill.component.html',
  styleUrls: ['./electricity-bill.component.css']
})
export class ElectricityBillComponent {
  totalUnits = 0;
  user: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    // Retrieve user data from server
    this.getUserData().subscribe((data) => {
      this.user = data;
    });
  }
  
  getUserData(): Observable<any> {
    const auth = getAuth();
    if (auth.currentUser) {
      const dn = auth.currentUser.displayName;
      const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/users/${dn}.json`;
      return this.http.get(url);
    } else {
      console.log('User not authenticated');
      alert('No User Logged In');
      return of(undefined);
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
import { Component } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';


interface User {
  displayname: string;
  email: string;
  // Define other fields as needed
}
@Component({
  selector: 'app-adminsearch',
  templateUrl: './adminsearch.component.html',
  styleUrls: ['./adminsearch.component.css']
})
export class AdminsearchComponent {
  email!: string;
  constructor(private http: HttpClient,private toastr: ToastrService) {}





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

}

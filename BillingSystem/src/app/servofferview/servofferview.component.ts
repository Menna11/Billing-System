import { Component   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { of } from 'rxjs';
import { getDatabase, ref, set,child ,update} from 'firebase/database';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { map } from 'rxjs/operators';

interface Offer {
  price: number;
  name: string;
  sp:  string;
}
@Component({
  selector: 'app-servofferview',
  templateUrl: './servofferview.component.html',
  styleUrls: ['./servofferview.component.css']
})
export class ServofferviewComponent {
  offers: Offer[] = [];
  constructor(private http: HttpClient,private toastr: ToastrService) {}


  ngOnInit()
  {
    this.getoffers().subscribe((offersdata) => {
      this.offers = offersdata;
      
    
    });
  }

getoffers():Observable<Offer[]>{

const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/offers.json`;
return this.http.get<Record<string, Offer>>(url).pipe(
  map(data => Object.values(data).filter((offer: Offer) =>0 === 0))
);






}







}

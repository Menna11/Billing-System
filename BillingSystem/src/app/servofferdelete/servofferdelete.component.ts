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
  selector: 'app-servofferdelete',
  templateUrl: './servofferdelete.component.html',
  styleUrls: ['./servofferdelete.component.css']
})
export class ServofferdeleteComponent {
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



Delete(offer:Offer)
{
  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/offers/${offer.name}.json`;
  this.http.delete(url).subscribe((response) => {
    this.toastr.success(`Offer Deleted`);
    }, (error) => {
      this.toastr.error(`Error Deleting Offer`);
    });




}
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastrService, IndividualConfig } from 'ngx-toastr';




interface Offer {
  name: string;
  price: number;
  sp:  string;
}
@Component({
  selector: 'app-servoffer',
  templateUrl: './servoffer.component.html',
  styleUrls: ['./servoffer.component.css']
})
export class ServofferComponent {

  constructor(private router: Router, private activedRoute: ActivatedRoute,private http: HttpClient,private toastr: ToastrService) {}
  offers: Offer[] = [];
newOffer: Offer = {
    name: '',
    price: 0,
    sp: '',
  };


  ngOnInit()
  {
    this.getoffers().subscribe((offersdata) => {
      this.offers = offersdata;
    });


    
  }


getoffers():Observable<Offer[]>{
const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/offers.json`;
      return this.http.get<Record<string, Offer>>(url).pipe(
        map(data => Object.values(data).filter((offer: Offer) => 0 === 0))
      );

}



addOffer()
{

  const url = `https://billing-system-5d5f0-default-rtdb.europe-west1.firebasedatabase.app/offers/${this.newOffer.name}.json`;
    this.http.patch(url,this.newOffer).subscribe((response) => {
      this.toastr.success(`Offer added to offers`);
      }, (error) => {
        this.toastr.error(`Error Adding Offer`);
      });


 

}




}

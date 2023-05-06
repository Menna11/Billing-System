import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileAndRowDataService {

  public rowDetails=new Subject<any>();

  constructor() { }

  passData(data: any)
  {
    this.rowDetails.next(data);
  }
}

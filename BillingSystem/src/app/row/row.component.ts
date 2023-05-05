import { Component,  Output,EventEmitter } from '@angular/core';
import { ProfileAndRowDataService } from '../services/ProfileAndRowData/profile-and-row-data.service';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  isCancel=true;
  isAdd=true;
  newPhoneNumber:any ;
  newServiceProv:any ;
  phoneDetails:any[]=[];

  @Output() rowCancel=new EventEmitter<boolean>();
  @Output() rowAdd=new EventEmitter<boolean>();

  constructor(private profileRowService:ProfileAndRowDataService){}

  addPhone()
  {
    for(var i in this.phoneDetails) 
    {
    this.phoneDetails.pop();
    }


    this.phoneDetails.push(this.newPhoneNumber);
    this.phoneDetails.push(this.newServiceProv);
    this.profileRowService.passData(this.phoneDetails);
    this.rowAdd.emit(this.isAdd);
    this.isAdd=false;
        
  }

  onCancel()
  {
    this.rowCancel.emit(this.isCancel);
    this.isCancel=false;
  }
}

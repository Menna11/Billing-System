import { Component } from '@angular/core';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component {
  newPhone=false;
  isFilterInput=false;
  filterText='';
  isCancelNow=false;

  isCancelMethod($event:boolean)
  {
    this.isCancelNow=$event;
    if(this.isCancelNow==true)
    {
      this.newPhone=false;
    }
  }

  addNewPhone()
  {
    this.newPhone=false;
  }
}

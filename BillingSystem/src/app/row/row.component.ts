import { Component,  Output,EventEmitter } from '@angular/core';

@Component({
  selector: '[app-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {
  id=0;
  isCancel=false;
  @Output() rowCancel=new EventEmitter<boolean>();

  addPhone()
  {

  }

  onCancel()
  {
    this.rowCancel.emit(this.isCancel);
  }
}

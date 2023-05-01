import { Component } from '@angular/core';
import { DataSnapshot, child, get, set } from 'firebase/database';
import {db} from 'src/app/firebase-config'
import { getDatabase, ref, onValue} from "firebase/database";

@Component({
  selector: 'app-water-bill',
  templateUrl: './water-bill.component.html',
  styleUrls: ['./water-bill.component.css']
})


export class WaterBillComponent 
{
  waterunit:any;
  unitsconsumed:any;
  totalbill:any;
  constructor()
  {
    const water = ref(db);
    get(child(water,'waterunitcost')).then((snapshot)=>{
      const unit=snapshot.val();
      this.waterunit=unit;
  })

  this.unitsconsumed=this.getRandomInt(100,200);
  this.totalbill=this.unitsconsumed*this.waterunit;
   
  }
   getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

}

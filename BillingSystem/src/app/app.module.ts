import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WaterBillComponent } from './water-bill/water-bill.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { Route, RouterModule } from '@angular/router';



const routes:Route[]=[
  {path:'HomePage',component:AppComponent},
{path:'WaterBill',component:WaterBillComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    WaterBillComponent,
    MenucomponentComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WaterBillComponent } from './water-bill/water-bill.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { Route, RouterModule } from '@angular/router';
import { Profile2Component } from './profile2/profile2.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RowComponent } from './row/row.component';



const routes:Route[]=[
  {path:'HomePage',component:HomeComponent},
  {path:'WaterBill',component:WaterBillComponent},
  {path: 'Profile2',component:Profile2Component},
  {path:'**',redirectTo:'HomePage'}
];
@NgModule({
  declarations: [
    AppComponent,
    WaterBillComponent,
    MenucomponentComponent,
    Profile2Component,
    HomeComponent,
    RowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

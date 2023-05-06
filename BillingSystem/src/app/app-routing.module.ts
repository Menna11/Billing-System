import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElectricityBillComponent } from './user-dashboard/electricity-bill/electricity-bill.component';
import { BillsSectionComponent } from './bills-section/bills-section.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { WaterBillComponent } from './water-bill/water-bill.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import { Profile2Component } from './profile2/profile2.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'PayElectricty', component: ElectricityBillComponent },
    { path: 'login', component: LoginComponent },
    { path: 'Profile2',component:Profile2Component},
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: UserDashboardComponent },
    {path:'WaterBill',component:WaterBillComponent },
    {path:'Bills',component:BillsSectionComponent},
    {path:'phonebill',component:PhoneBillComponent},
    { path: 'home', component: HomeComponent },
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes),
      FormsModule,BrowserModule],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

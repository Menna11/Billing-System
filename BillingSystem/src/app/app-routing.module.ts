import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElectricityBillComponent } from './user-dashboard/electricity-bill/electricity-bill.component';

import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AdminComponent} from './admin/admin.component';
import {WalletComponent}from './wallet/wallet.component';
import {AdminwalletComponent}from './adminwallet/adminwallet.component';
import {AdminelecComponent}from './adminelec/adminelec.component';
import {AdminsearchComponent}from './adminsearch/adminsearch.component';
import {ServiceproviderComponent}from './serviceprovider/serviceprovider.component';
import {ServofferComponent}from './servoffer/servoffer.component';
import {ServofferviewComponent}from './servofferview/servofferview.component';
import {ServofferdeleteComponent}from './servofferdelete/servofferdelete.component';
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'PayElectricty', component: ElectricityBillComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'home', component: UserDashboardComponent },
    { path: 'adminwallet', component: AdminwalletComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'adminelec', component: AdminelecComponent },
    { path: 'adminsearch', component: AdminsearchComponent },
    { path: 'service', component: ServiceproviderComponent },
    { path: 'addoffer', component: ServofferComponent },
    { path: 'viewoffer', component: ServofferviewComponent },
    { path: 'deleteoffer', component: ServofferdeleteComponent },
    
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

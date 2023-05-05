import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ElectricityBillComponent } from './user-dashboard/electricity-bill/electricity-bill.component';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WalletComponent } from './wallet/wallet.component';
import { AdminwalletComponent } from './adminwallet/adminwallet.component';
import { AdminelecComponent } from './adminelec/adminelec.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ElectricityBillComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    WalletComponent,
    AdminwalletComponent,
    AdminelecComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot()
    
  ],
  exports:[
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

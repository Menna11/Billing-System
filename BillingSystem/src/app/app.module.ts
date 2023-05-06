//MODULES are in the IMPORTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { Route, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ElectricityBillComponent } from './user-dashboard/electricity-bill/electricity-bill.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//COMPONENTS are added in DECLARATIONS
import { WaterBillComponent } from './water-bill/water-bill.component';
import { MenucomponentComponent } from './menucomponent/menucomponent.component';
import { Profile2Component } from './profile2/profile2.component';
import { HomeComponent } from './home/home.component';
import { RowComponent } from './row/row.component';
import { FirebaseService } from './firebase.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BillsSectionComponent } from './bills-section/bills-section.component';
import { PhoneBillComponent } from './phone-bill/phone-bill.component';
import {MatTableDataSource,} from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule } from '@angular/material/checkbox';


//SERVICES are added in the PROVIDERS
import { ProfileAndRowDataService } from './services/ProfileAndRowData/profile-and-row-data.service';
import { GetCurrentUserService } from './services/getCurrentUser/get-current-user.service';
import { AddNewPhoneService } from './services/addNewPhone/add-new-phone.service';

const routes:Route[]=[
  {path:'HomePage',component:HomeComponent},
  {path:'WaterBill',component:WaterBillComponent},
  {path:'PhoneBill',component:PhoneBillComponent},
  {path: 'Profile2',component:Profile2Component},
  {path:'Bills',component:BillsSectionComponent},
  {path:'**',redirectTo:'HomePage'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    ElectricityBillComponent,
    LoginComponent,
    SignupComponent,  
    WaterBillComponent,
    MenucomponentComponent,
    Profile2Component,
    HomeComponent,
    RowComponent,
    BillsSectionComponent,
    PhoneBillComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatCheckboxModule
  ],

  providers: [
    FirebaseService,ProfileAndRowDataService,
    AddNewPhoneService,
    GetCurrentUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

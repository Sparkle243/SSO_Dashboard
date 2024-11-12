import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ExituserComponent } from './exituser/exituser.component';
import { AuthGuard } from './shared/auth.guard';
import { GeneralserviceService } from './generalservice.service';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
    NewuserComponent,
    ExituserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000, // Duration in ms
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true,
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent,canActivate: [AuthGuard], },
    { path: 'about', component: AboutComponent,canActivate: [AuthGuard], },
    { path: 'contact', component: ContactComponent,canActivate: [AuthGuard], },
    { path: 'employeeDetails', component: EmployeeDetailsComponent,canActivate: [AuthGuard], },
    { path: 'employeeForm', component: EmployeeFormComponent,canActivate: [AuthGuard], },
    { path: 'newuser', component: NewuserComponent ,canActivate: [AuthGuard],},
    { path: 'exituser', component: ExituserComponent,canActivate: [AuthGuard],},
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

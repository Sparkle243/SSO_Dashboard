import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ExituserComponent } from './exituser/exituser.component';
import { AuthGuard } from './shared/auth.guard';
import { GeneralserviceService } from './generalservice.service';
const routes: Routes = [
    { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent },
    { path: 'home', component: HomeComponent,canActivate: [AuthGuard], },
    { path: 'about', component: AboutComponent,canActivate: [AuthGuard], },
    { path: 'contact', component: ContactComponent,canActivate: [AuthGuard], },
    { path: 'employeeDetails', component: EmployeeDetailsComponent,canActivate: [AuthGuard], },
    { path: 'employeeForm', component: EmployeeFormComponent,canActivate: [AuthGuard], },
    { path: 'newuser', component: NewuserComponent ,canActivate: [AuthGuard],},
    { path: 'exituser', component: ExituserComponent,canActivate: [AuthGuard],},
    
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { NewUserDetailsComponent } from './new-user-details/new-user-details.component';
import { ExitingUserDetailsComponent } from './exiting-user-details/exiting-user-details.component';


@NgModule({
  declarations: [
    NewUserDetailsComponent,
    ExitingUserDetailsComponent, 
   ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    
  ]
})
export class AdminmoduleModule { }

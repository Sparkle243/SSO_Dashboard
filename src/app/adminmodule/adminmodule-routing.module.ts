import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserDetailsComponent } from './new-user-details/new-user-details.component';
import { ExitingUserDetailsComponent } from './exiting-user-details/exiting-user-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'newUser', component: NewUserDetailsComponent },
      { path: 'existingUser', component: ExitingUserDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminmoduleRoutingModule { }

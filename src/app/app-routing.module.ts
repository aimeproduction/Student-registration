import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationControllerComponent} from "./Components/registration-controller/registration-controller.component";
import {ListStudentComponent} from "./Components/list-student/list-student.component";
import {LoginComponent} from "./Components/login/login.component";
import {ProtectPageGuard} from "./Components/registration-controller/protect-page.guard";
import {ProtectPageListGuard} from "./Components/list-student/protect-page-list.guard";
import {ConfirmLeavingGuard} from "./Components/registration-controller/confirm-leaving.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'student-registration',
    component: RegistrationControllerComponent,
  // canActivate:[ProtectPageGuard],
    // canDeactivate: [ConfirmLeavingGuard]
  },
  {
    path: 'list-student',
    component: ListStudentComponent,
    // canActivate:[ProtectPageListGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

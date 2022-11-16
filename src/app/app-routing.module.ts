import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationControllerComponent} from "./Components/registration-controller/registration-controller.component";
import {ListStudentComponent} from "./Components/list-student/list-student.component";
import {LoginComponent} from "./Components/login/login.component";



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
    component: RegistrationControllerComponent
  },
  {
    path: 'list-student',
    component: ListStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

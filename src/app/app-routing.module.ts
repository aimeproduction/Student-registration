import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationControllerComponent} from "./registration-controller/registration-controller.component";
import {ListStudentComponent} from "./list-student/list-student.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'student-registration',
    pathMatch: 'full'
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

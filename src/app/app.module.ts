import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationControllerComponent } from './Components/registration-controller/registration-controller.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentInformationUpdateComponent } from './Components/student-information-update/student-information-update.component';
import {HttpClientModule} from "@angular/common/http";
import { ListStudentComponent } from './Components/list-student/list-student.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { LoginComponent } from './Components/login/login.component';
import { DialogConfirmComponent } from './Components/dialog-confirm/dialog-confirm.component';
import {A11yModule} from "@angular/cdk/a11y";
import {NavbarComponent} from "./Components/navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
    declarations: [
        AppComponent,
        RegistrationControllerComponent,
        StudentInformationUpdateComponent,
        ListStudentComponent,
        DeleteStudentComponent,
        LoginComponent,
        DialogConfirmComponent,
        NavbarComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    A11yModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

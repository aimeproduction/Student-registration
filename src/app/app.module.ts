import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationControllerComponent } from './registration-controller/registration-controller.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudentInformationUpdateComponent } from './student-information-update/student-information-update.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListStudentComponent } from './list-student/list-student.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { DeleteStudentComponent } from './delete-student/delete-student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationControllerComponent,
    StudentInformationUpdateComponent,
    ListStudentComponent,
    DeleteStudentComponent,

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
        MatTooltipModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

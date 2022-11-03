import {Component, Inject, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

import {StudentDashboardModel} from "./student-dashboard-model";
import {ApiService, StudentPlayLoad} from "../backend/api.service";

export interface DialogData {
  student_matricule: string;
  student_id: number;
}
@Component({
  selector: 'app-registration-controller',
  templateUrl: './registration-controller.component.html',
  styleUrls: ['./registration-controller.component.css']
})

export class RegistrationControllerComponent implements OnInit {
  visible = true;
  hideElement = true;
  student_firstname = '';
  student_lastname='';
  date ='';
  street ='';
  postcode ='';
  city ='';
  public form!: FormGroup;
  matricule_first_part ='st'
  matricule_last_part = 1000;
  matricule = '';
  public formDiagram!: FormGroup;
  //studentmodel: StudentDashboardModel = new StudentDashboardModel();
  studentmodel!: StudentPlayLoad;

  toggleElement() {
    this.hideElement = !this.hideElement;
  }
  constructor(private title: Title, private fb: FormBuilder, private _snackBar: MatSnackBar,
              public dialog: MatDialog, private api: ApiService) {
  }


  onSubmit(form: FormGroup) {
    this.matricule = this.matricule_first_part + this.matricule_last_part;
    this.matricule_last_part++;
    this.form.value.matricule = this.matricule;
    console.log(this.form.value);
this.api.post_student_data(this.form.value).subscribe(res=>{
  console.log(res);
  alert("student added");
  location.reload();
},
error => {
  alert("wrong");
})
  }


  ngOnInit(): void {
    this.formDiagram = this.fb.group({
      valueToUpdate: [''],
    });
    this.title.setTitle('registration');


    this.form = this.fb.group({
      matricule: [this.matricule],
      student_firstname: ['', [Validators.required, Validators.minLength(4)]],
      student_lastname: ['', Validators.required],
      date: ['', Validators.required],
        street: ['', Validators.required],
        postcode: ['', Validators.required],
        city: ['', Validators.required]
    });

  }

}






import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../Service/api.service";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {StudentPlayLoad} from "../../Models/studentPlayLoad";
import {DialogData} from "../../Models/dialogData";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-information-update',
  templateUrl: './student-information-update.component.html',
  styleUrls: ['./student-information-update.component.css']
})
export class StudentInformationUpdateComponent implements OnInit {
  student_matricule ='';
  student_id = 0;
  data_api = {} as StudentPlayLoad ;
  errorMessage='';
  public form!: UntypedFormGroup;
  dataToSend!: StudentPlayLoad;
  student_firstname: string= '';
  student_lastname: string= '';
  date: Date = new Date();
  street: string= '';
  postcode: string= '';
  city: string= '';

  constructor(public dialogRef: MatDialogRef<StudentInformationUpdateComponent>,
  // tslint:disable-next-line:max-line-length
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private api: ApiService,
              private fb: UntypedFormBuilder,
              private _snackBar: MatSnackBar,
              private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.idAndMatricule();
    this.get_student_data();
    this.form = this.fb.group({
      matricule: [''],
      student_firstname: ['', [Validators.required, Validators.minLength(4)]],
      student_lastname: ['', Validators.required],
      date: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

get_student_data(){
  this.api.get_student_data_by_id(this.student_id).subscribe((data) => {
    this.data_api = data
    console.log(this.data_api);
  }, () => {
    this.errorMessage = 'Sorry, it was not possible to load the data.'
  });
  }

  idAndMatricule(){
    this.student_id = this.data.student_id;
    this.student_matricule = this.data.student_matricule;
  }

  ClickClose(): void {
    this.dialogRef.close();
  }

  update_data_student(){

    this.dataToSend = {
      matricule: this.data_api.matricule,
      student_firstname: this.form.controls['student_firstname'].value,
      student_lastname: this.form.controls['student_lastname'].value,
      date: this.form.controls['date'].value,
      street: this.form.controls['street'].value,
      postcode: this.form.controls['postcode'].value,
      city: this.form.controls['city'].value
    } as StudentPlayLoad;
    this.api.update_student_data(this.dataToSend, this.student_id).subscribe();
    this.ClickClose();
     this.route.navigate(['list-student'])

  }
}


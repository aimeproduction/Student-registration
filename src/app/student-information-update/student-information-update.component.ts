import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from "../registration-controller/registration-controller.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../backend/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";

export interface StudentPlayLoad {
  matricule: string;
  student_firstname: string;
  student_lastname: string;
  date: Date;
  diagramtyp: string;
  street: string;
  postcode: string;
  city: string;
}
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
  public form!: FormGroup;
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
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private http: HttpClient,
              private route: Router) { }

  ngOnInit(): void {
    this.test();
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
  return this.http.get<any>("http://localhost:3000/posts/" + this.student_id).subscribe((data) => {
    this.data_api = data
    console.log(this.data_api);
  }, () => {
    this.errorMessage = 'Es ist nicht möglich die Abfragen zu laden. Bitte prüfen Sie die Verbindung mit dem Server.'
  });
  }
  test(){
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

    console.log("---------- --- >>>>>>>> " + this.dataToSend);

    this.api.update_student_data(this.dataToSend, this.student_id)
      .subscribe(
        {
          next: (response) => {

          },
          error: (err: HttpErrorResponse) => {
              console.log(err.message);
          }
        }
      );

   this._snackBar.open('Ihre Daten wurden erfolgreich gespeichert', 'Danke', {
      duration: 7000,
    });
     location.reload();
  }
}


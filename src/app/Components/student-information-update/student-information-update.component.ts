import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ApiService} from "../../Service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {StudentPlayLoad} from "../../Models/studentPlayLoad";
import {DialogData} from "../../Models/dialogData";
import {Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'app-student-information-update',
  templateUrl: './student-information-update.component.html',
  styleUrls: ['./student-information-update.component.css']
})
export class StudentInformationUpdateComponent implements OnInit {
  student_matricule = '';
  student_id = 0;
  data_api$!: Observable<StudentPlayLoad>;
  public form!: FormGroup;
  dataToSend!: StudentPlayLoad;
  student_firstname: string = '';
  student_lastname: string = '';
  date: Date = new Date();
  street: string = '';
  errorObject = ''
  dateoftheday!: Date;
  errorstudent = ''
  datas: any;
  saveData = true;
  temp!: number;

  constructor(public dialogRef: MatDialogRef<StudentInformationUpdateComponent>,
              // tslint:disable-next-line:max-line-length
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              public api: ApiService,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private http: HttpClient, private route: Router) {
  }

  ngOnInit(): void {
    this.idAndMatricule();
    this.errorObject = '';

    this.data_api$ = this.api.get_student_data_by_id(this.student_id).pipe(tap((res: StudentPlayLoad) => {
        return res;
      }),
      catchError(err => {
        this.errorObject = 'Sorry, it was not possible to load the data.';
        return throwError(err);
      })
    );


    this.form = this.fb.group({
      matricule: [''],
      student_firstname: ['', [Validators.required, Validators.minLength(4)]],
      student_lastname: ['', Validators.required],
      date: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', Validators.required],
      city: ['', Validators.required],
      dateoftheDay: this.dateoftheday
    });
  }


  idAndMatricule() {
    this.student_id = this.data.student_id;
    this.student_matricule = this.data.student_matricule;
    this.dateoftheday = this.data.dateoftheday;
  }


  update_data_student() {

    this.api.get_student_data().subscribe((res) => {
      this.datas = res;
      if (this.datas.length == 0) {
        this.temp = 0;
      } else {
        this.temp = this.datas[this.datas.length - 1].id;
      }
      for (let i = 0; i < this.datas.length; i++) {
        if ((this.datas[i].student_firstname === this.form.value.student_firstname) && (this.datas[i].student_lastname === this.form.value.student_lastname)
          && (this.datas[i].date === this.form.value.date) && (this.datas[i].street === this.form.value.street)) {
          this.errorstudent = 'A student with the same data already exists.'
          this.saveData = false;
          break;
        } else {
          this.saveData = true;
          this.errorstudent = '';
        }
      }

      if (this.saveData) {
        this.form.value.matricule = this.student_matricule;
        this.api.update_student_data(this.form.value, this.student_id).subscribe(() => {
            this._snackBar.open('The data has been successfully updated!', 'Okay', {
              duration: 5000,
              verticalPosition: 'top'
            })
            this.dialogRef.close();
          },
          error => {
            alert("Error, failure of the operation");
          });
      }
    })
  }
}

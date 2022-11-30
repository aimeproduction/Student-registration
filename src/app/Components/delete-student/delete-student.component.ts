import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../Models/dialogData";
import {ApiService} from "../../Service/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, throwError} from "rxjs";
import {StudentPlayLoad} from "../../Models/studentPlayLoad";
import {catchError} from "rxjs/operators";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student_matricule = '';
  student_id = 0;
  data_api$!: Observable<StudentPlayLoad>;
  student_firstname: string = '';
  student_lastname: string = '';
  date: Date = new Date();
  street: string = '';
  postcode: string = '';
  city: string = '';
  errorObject = ''

  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>,
              // tslint:disable-next-line:max-line-length
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ApiService,
              private _snackBar: MatSnackBar, private http: HttpClient, private ref: ChangeDetectorRef,
              private router: Router) {
  }

  ngOnInit(): void {
    this.idAndMatricule();
    this.errorObject = ''
    this.data_api$ = this.api.get_student_data_by_id(this.student_id).pipe(
      catchError(err => {
        this.errorObject = 'Sorry, it was not possible to load the data.';
        return throwError(err);
      })
    );
  }


  idAndMatricule() {
    this.student_id = this.data.student_id;
    this.student_matricule = this.data.student_matricule;
  }

  ClickClose(): void {
    this.dialogRef.close();
  }

  delete_student() {
    this.api.delete_student_data(this.student_id).subscribe(() => {
        this._snackBar.open('Your data has been successfully deleted!', 'Okay', {
          duration: 5000,
          verticalPosition: 'top'
        })
        this.dialogRef.close();
        this.router.navigate(['list-student']);
      },
      error => {
        alert("Error, failure of the operation");
      });
  }
}

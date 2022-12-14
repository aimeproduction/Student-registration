import {Component, OnInit} from '@angular/core';
import {StudentInformationUpdateComponent} from "../student-information-update/student-information-update.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../Service/api.service";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";
import {StudentPlayLoad} from "../../Models/studentPlayLoad";
import {Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';


@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student_matricule: string = '';
  student_id: number = 0;
  no_show = true;
  data$!: Observable<StudentPlayLoad[]>;
  search!: string;
  public form_search!: UntypedFormGroup;
  test = false;
  errorObject = '';
  dateoftheday = new Date();

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog, private api: ApiService, private fb: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.api.isSomebodyLogged = true;
    this.refresh();


    this.form_search = this.fb.group({
      search: [''],
    });
  }

  delete_student(matricule: string, id: number) {
    this.student_matricule = matricule;
    this.student_id = id;
    this.dialog.open(DeleteStudentComponent, {
      width: '500px', height: '500px',
      data: {student_matricule: this.student_matricule, student_id: this.student_id}
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }


  update_student(matricule: string, id: number, date: Date) {
    this.dateoftheday = date;
    this.student_matricule = matricule;
    this.student_id = id;
    this.dialog.open(StudentInformationUpdateComponent, {
      width: '700px', height: '650px',
      data: {student_matricule: this.student_matricule, student_id: this.student_id, dateoftheday: this.dateoftheday}
    }).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    this.errorObject = '';
    this.data$ = this.api.get_student_data().pipe(
      catchError(err => {
        this.errorObject = 'Sorry, it was not possible to load the data.';
        return throwError(err);
      })
    );
  }

  /* word_search(word: string) {
 this.search= word;
     console.log(this.search);
     for(let i =0; i<this.data.length; i++) {
       if((this.search === this.data[i].matricule)||(this.search === this.data[i].student_firstname)||
         (this.search === this.data[i].student_lastname) || (this.search === this.data[i].date) ||
         (this.search === this.data[i].street) || (this.search === this.data[i].postcode) ||
         (this.search === this.data[i].city)){
         this.found_data.push(this.data[i]);
       }
     }
     console.log(this.found_data)
   }*/


}

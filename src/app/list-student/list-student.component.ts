import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {StudentInformationUpdateComponent} from "../student-information-update/student-information-update.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../backend/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeleteStudentComponent} from "../delete-student/delete-student.component";


export interface StudentPlayLoad {
  matricule: string;
  student_firstname: string;
  student_lastname: string;
  date: Date;
  street: string;
  postcode: string;
  city: string;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student_matricule: string ='';
  errorMessageSend: string ='';
  student_id: number = 0;

  data: any;
  found_data: StudentPlayLoad [] = [] ;
  search: string='';
  public form_search!: FormGroup;
  hideElementConfiguration = true;
  visibleConfiguration = false;
  toggleElement() {
    this.visibleConfiguration = !this.visibleConfiguration;
    this.hideElementConfiguration = !this.hideElementConfiguration;
  }
  delete_student(matricule: string, id: number){
    this.student_matricule = matricule;
    this.student_id = id;
    this.dialog.open(DeleteStudentComponent, {
      width: '700px', height: '650px',
      data: {student_matricule: this.student_matricule, student_id: this.student_id}
    });

}

  delete_student_search(matricule: string){
    this.student_matricule = matricule;
    this.dialog.open(StudentInformationUpdateComponent, {
      width: '700px', height: '650px',
      data: {student_matricule: this.student_matricule}
    });

  }

  get_action( matricule: string, id: number){
    this.student_matricule = matricule;
    this.student_id = id;
      this.dialog.open(StudentInformationUpdateComponent, {
        width: '700px', height: '650px',
        data: {student_matricule: this.student_matricule, student_id: this.student_id}
      });

  }
  get_action_search(matricule: string){
    this.student_matricule = matricule;
    this.dialog.open(StudentInformationUpdateComponent, {
      width: '700px', height: '650px',
      data: {student_matricule: this.student_matricule}
    });
  }


  word_search(word: string) {
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
  }

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog, private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.api.get_student_data().subscribe((res) => {
      this.data = res;
        console.log(this.data);
      },
      error => {
        alert("wrong");
      })

    this.form_search = this.fb.group({
      search: [''],
    });
  }

}

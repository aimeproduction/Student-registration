import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../Models/dialogData";
import {ApiService} from "../../Service/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {

  student_matricule = '';
  student_id = 0;
  data_api: any;
  the_student: any;
  public form!: FormGroup;

  student_firstname: string = '';
  student_lastname: string = '';
  date: Date = new Date();
  street: string = '';
  postcode: string = '';
  city: string = '';
  errorMessage = '';

  constructor(public dialogRef: MatDialogRef<DeleteStudentComponent>,
              // tslint:disable-next-line:max-line-length
              @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ApiService, private fb: FormBuilder,
              private _snackBar: MatSnackBar, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.idAndMatricule();
    this.get_student_data();
    this.form = this.fb.group({
      matricule: [this.student_matricule],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', Validators.required],
      date: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', Validators.required],
      city: ['', Validators.required]
    });
  }


  idAndMatricule() {
    this.student_id = this.data.student_id;
    this.student_matricule = this.data.student_matricule;
  }

  ClickClose(): void {
    this.dialogRef.close();
  }

  get_student_data() {
    return this.http.get<any>("http://localhost:3000/posts/" + this.student_id).subscribe((data) => {
      this.data_api = data
      console.log(this.data_api);
    }, () => {
      this.errorMessage = 'Es ist nicht möglich die Daten zu laden. Bitte prüfen Sie die Verbindung mit dem Server.'
    });
  }


  delete_student() {
    this.api.delete_student_data(this.student_id).subscribe();
    this._snackBar.open('The student has been removed from the system.', 'Danke', {
      duration: 7000,
    })
    location.reload();
  }
}

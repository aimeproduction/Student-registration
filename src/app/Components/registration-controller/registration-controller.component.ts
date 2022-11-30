import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ApiService} from "../../Service/api.service";


@Component({
  selector: 'app-registration-controller',
  templateUrl: './registration-controller.component.html',
  styleUrls: ['./registration-controller.component.css']
})

export class RegistrationControllerComponent implements OnInit {
  visible = true;
  public form!: FormGroup;
  matricule_first_part = 'st'
  matricule_last_part = 1;
  matricule = '';
  data: any;
  temp!: number;


  constructor(private title: Title, private fb: UntypedFormBuilder, private _snackBar: MatSnackBar, private api: ApiService) {
  }



  onSubmit() {
    this.api.get_student_data().subscribe((res) => {
        this.data = res;
        if (this.data.length == 0) {
          this.temp = 0;
        } else {
          this.temp = this.data[this.data.length - 1].id;
        }
        this.matricule = this.matricule_first_part + this.matricule_last_part + this.temp;
        this.form.value.matricule = this.matricule;
        this.api.post_student_data(this.form.value).subscribe(res => {
            this.form.reset();
            this._snackBar.open('Your data has been successfully saved!', 'Okay', {
              duration: 5000,
              verticalPosition: 'top'
            })
          },
          error => {
            alert("Error, failure of the operation");
          })
      },
      error => {
        alert("wrong");
      })
  }


  ngOnInit(): void {
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

import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import { MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../Service/api.service";


@Component({
  selector: 'app-registration-controller',
  templateUrl: './registration-controller.component.html',
  styleUrls: ['./registration-controller.component.css']
})

export class RegistrationControllerComponent implements OnInit {
  visible = true;
  hideElement = true;
  public form!: FormGroup;
  matricule_first_part ='st'
  matricule_last_part = 1;
  matricule = '';
  public formDiagram!: FormGroup;
  data: any;
  temp!: number;


  toggleElement() {
    this.hideElement = !this.hideElement;
  }
  constructor(private title: Title, private fb: FormBuilder, private _snackBar: MatSnackBar,
              public dialog: MatDialog, private api: ApiService) {
  }


  onSubmit() {
    this.api.get_student_data().subscribe((res) => {
        this.data = res;
        if(this.data.length ==0){
          this.temp =0;
        }
        else {
          this.temp = this.data[this.data.length - 1].id;
        }
        this.matricule = this.matricule_first_part + this.matricule_last_part+this.temp;
        this.form.value.matricule = this.matricule;
        this.api.post_student_data(this.form.value).subscribe(res=> {
          alert("A student has been added!");
          location.reload();
          },
          error => {
            alert("Error, Unsuccessfully.");
          })
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

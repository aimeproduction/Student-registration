import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formular!: FormGroup;
  errorMessage ='';
  constructor(private route: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formular = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    if(this.formular.value.user === "angular" && this.formular.value.password=== "project") {
      this.route.navigate(['student-registration']);
      this.errorMessage ='';
    }
    else{
      this.errorMessage='User or password incorrect!'
    }
  }

}


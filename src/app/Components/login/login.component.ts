import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../Service/api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formular!: UntypedFormGroup;
  errorMessage = '';
  count = 0;
leavePage = false;
  constructor(private route: Router, private fb: UntypedFormBuilder, private api: ApiService) {

  }

  ngOnInit(): void {
    this.formular = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(user: string, password: string){
    if (user === this.api.firstUser && password === this.api.firstPassword){
      this.route.navigate(['list-student']);
      this.errorMessage = '';
      this.api.firstUserLogged = true;
      this.api.isSomebodyLogged =true;
      this.leavePage = true;
    }
    else if (user === this.api.secondUser && password=== this.api.secondPassword){
      this.route.navigate(['list-student']);
      this.errorMessage = '';
      this.api.isSomebodyLogged =true;
      this.api.firstUserLogged = false;
      this.leavePage = true;
    } else {
      this.errorMessage = 'User or password incorrect!'
      this.leavePage = false;
    }
  }

}


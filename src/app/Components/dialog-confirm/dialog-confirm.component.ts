import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ConfirmLeavingGuard} from "../registration-controller/confirm-leaving.guard";

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {
navigationOption =false;
  constructor(public dialogRef: MatDialogRef<DialogConfirmComponent>, private route: Router, private nav: ConfirmLeavingGuard) { }

  ngOnInit(): void {
  }


  cancelOperation(){
    this.dialogRef.close();
    this.nav.navigate =false;
  }
  Confirmation(){
    this.nav.navigate =true;
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of} from 'rxjs';
import {RegistrationControllerComponent} from "./registration-controller.component";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ConfirmLeavingGuard implements CanDeactivate<RegistrationControllerComponent> {
  navigate = false;
  constructor(private dialog: MatDialog) {
  }
  canDeactivate(
    component: RegistrationControllerComponent):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.form.dirty){
      const dialogCom = this.dialog.open(DialogConfirmComponent);
      return dialogCom.afterClosed();
    }
    return of (true);
  }

}

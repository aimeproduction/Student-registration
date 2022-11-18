import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../../Service/api.service";

@Injectable({
  providedIn: 'root'
})
export class ProtectPageListGuard implements CanActivate {
  constructor(private api: ApiService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.api.isSomebodyLogged) {
        return true
    }
    else {
      console.log('guard'+ this.api.isSomebodyLogged)
      return false;
    }
  }

}

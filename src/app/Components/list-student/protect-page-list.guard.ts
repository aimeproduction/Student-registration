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
    return this.api.isSomebodyLogged;
  }

}

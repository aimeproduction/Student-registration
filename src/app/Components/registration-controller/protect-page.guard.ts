import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {ApiService} from "../../Service/api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProtectPageGuard implements CanActivate {
  constructor(private route: Router, private api: ApiService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.api.firstUserLogged) {
      return true
    }
    else if(!this.api.isSomebodyLogged){
      this.route.navigate(['/login'])
      return false;
    }
    else {
      alert('You do not have the required rights to access this page!');
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ApiService} from "../../Service/api.service";

@Injectable({
  providedIn: 'root'
})
export class ProtectPageListGuard implements CanActivate {
  constructor(private api: ApiService, private route: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.api.isSomebodyLogged){
      return true;
    }
    else{
      this.route.navigate(['/login'])
      return false;
    }
  }

}

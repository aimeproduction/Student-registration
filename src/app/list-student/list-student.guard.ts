import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListStudentGuard implements CanActivate {
  constructor(private route: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route)
    const url = route.url[0].path;
if(url === "list-student") {
  console.log('vrai')
}
else{
  alert('route inconnu')
  this.route.navigate(['/list-student']);
  return false;
}

    return true;
  }

}

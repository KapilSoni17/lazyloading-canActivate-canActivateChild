import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(){
    const isAdmin = true;
   if (isAdmin) {
    return true;
  }
  else
  { return false; }

  }
}

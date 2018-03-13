import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RoleGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        
      const expectedRole = route.data.expectedRole;
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // decode the token to get its payload
   
      if(currentUser.user.role == expectedRole){
        return true;
        // not right role, redirect to login page
        
      }
      this.router.navigate(['/login']);
        return false;
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Make sure you have an AuthService to handle authentication
import { GeneralserviceService } from '../generalservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: GeneralserviceService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userData = this.service.getLoginData();

    if (!userData) {
      this.router.navigate(['/login']);
      return false;
    }

    // Get the current route path and check permissions based on the user's role
    const routePath = route.routeConfig?.path || '';
    if (this.isUserAllowed(userData.role, routePath)) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return false;
    }
  }

  private isUserAllowed(userRole: string, routePath: string): boolean {
    const allowedRoles = this.service.getAllowedRoles(routePath);
    return allowedRoles.includes(userRole);
  }
  
}

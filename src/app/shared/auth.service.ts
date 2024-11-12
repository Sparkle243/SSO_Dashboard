import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  // Method to check if the user is logged in
  private isAuthenticated(): boolean {
    // Here you can check if the user is logged in by verifying a token or using a service
    const token = localStorage.getItem('authToken'); // Example: checking local storage
    return !!token; // Returns true if token exists, false otherwise
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // Block access to the route
    }
  }
}

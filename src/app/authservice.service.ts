import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(): void {
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    localStorage.removeItem('isLoggedIn');
  }
}

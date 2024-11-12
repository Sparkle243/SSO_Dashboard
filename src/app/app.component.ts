import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbase13';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Navigated to:', event.url);
      }
    });
  }
  ngOnInit() {
    window.addEventListener('beforeunload', () => {
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['/login']);
      // Directing to login page on refresh
      // Note: `navigate` method does not work here as page is already unloading
    });

    // Redirect to login if not logged in
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/login']);
    }
  }
  
  isLoggedIn() {
    console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  
}

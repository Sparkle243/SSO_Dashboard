import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { GeneralserviceService } from '../generalservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DatePipe]
})
export class NavbarComponent  {
  currentDate: string;
  loginDate: any;

  constructor(private router: Router,private datePipe: DatePipe,private service:GeneralserviceService) {
    const now = new Date();

    this.currentDate = this.datePipe.transform(now, 'EEE MMM d yyyy') || '';

    this.loginDate = this.service.getLoginData();
    console.log("this.loginDate",  this.loginDate)
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to Logout Application !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          'Your Successfully Logged Out.',
          'success'
        )
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your not Logged out',
        //   'error'
        // )
      }
    });
    
  }
}

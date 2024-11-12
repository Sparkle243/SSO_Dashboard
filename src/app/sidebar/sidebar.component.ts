import { Component, OnInit } from '@angular/core';
import { GeneralserviceService } from '../generalservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isAdminDropdownOpen = false;
  isAdmin: boolean = false;

  constructor(private service: GeneralserviceService) {}

  ngOnInit(): void {
    // this.checkUserRole();
  }
  toggleAdminDropdown() {
    this.isAdminDropdownOpen = !this.isAdminDropdownOpen;
  }
  // checkUserRole(): void {
  //   const userData = this.service.getLoginData();
  //   console.log("userData",userData)
  //   if (userData && userData.role === 'admin') {
  //     this.isAdmin = true;
  //   } else {
  //     this.isAdmin = false;
  //   }
  // }

}

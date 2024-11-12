import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user-details',
  templateUrl: './new-user-details.component.html',
  styleUrls: ['./new-user-details.component.css']
})
export class NewUserDetailsComponent implements OnInit {

  constructor() { 
    console.log('NewUserDetailsComponent initialized');
  }

  ngOnInit(): void {
  }

}

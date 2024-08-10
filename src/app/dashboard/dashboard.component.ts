import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: any[] = [
    { title: 'Users', value: 1500, description: 'Total registered users' },
    { title: 'Sales', value: 3200, description: 'Total sales this month' },
    { title: 'Feedback', value: 85, description: 'Customer feedback received' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

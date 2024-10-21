import { Component, Input, OnInit,SimpleChanges  } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() sharedParentData: any; // Ensure this is properly defined
  public recievedParentdata: any;

  constructor() {}

  ngOnInit(): void {
    // This will only run once when the component is initialized
    this.recievedParentdata = this.sharedParentData;
    console.log("ngOnInit - this.recievedParentdata", this.recievedParentdata);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // This will run whenever the @Input properties change
    if (changes['sharedParentData']) {
      this.recievedParentdata = changes['sharedParentData'].currentValue;
      console.log("ngOnChanges - this.recievedParentdata", this.recievedParentdata);
    }
  }

}

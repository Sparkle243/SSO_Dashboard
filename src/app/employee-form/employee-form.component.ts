import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;
  sharedParentData: any;
  showChild:boolean=true
  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit(): void {
    // Initialize form with FormArray for table rows
    this.employeeForm = this.fb.group({
      rows: this.fb.array([]),
    });

    this.addRow();  // Adds a default empty row on load
  }

  // Getter for the rows FormArray
  get rows(): FormArray {
    return this.employeeForm.get('rows') as FormArray;
  }

  // Add a new row to the FormArray
  addRow() {
    if (this.employeeForm.invalid) {
      alert('Please fill all required fields before adding a new row!');
      return; // Prevent adding a new row
    }
    const newRow = this.fb.group({
      id: [this.rows.length + 1],  // Auto-incrementing ID
      name: ['', Validators.required],  // Required field
      email: ['', [Validators.required, Validators.email]],  // Email validation
      contact: [null, Validators.required,],  // Required and min value validation
    });
    this.rows.push(newRow);  // Add the new row to FormArray
    console.log("this.rows",this.rows)
  }

  // Remove a row from the FormArray
  removeRow(index: number) {
    this.rows.removeAt(index);
  }

  // Save the form (you can send this to a backend or handle locally)
  saveForm() {
    console.log('Form Data:', this.employeeForm.value,this.employeeForm.value.rows);
    if (this.employeeForm.valid) {
      // Handle form submission (e.g., send to backend)
     
      this.sharedParentData = this.employeeForm.value.rows; // Get form data
    console.log("Data to pass:", this.sharedParentData);
    this.router.navigate(['/employeeDetails'], { state: { data: this.sharedParentData } });
     this.showChild = false
    } else {
      this.showChild = true
      alert('Form is invalid!');
    }
  }

}

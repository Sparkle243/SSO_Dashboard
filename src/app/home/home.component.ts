import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tableForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize form with FormArray for table rows
    this.tableForm = this.fb.group({
      rows: this.fb.array([]),
    });

    this.addRow();  // Adds a default empty row on load
  }

  // Getter for the rows FormArray
  get rows(): FormArray {
    return this.tableForm.get('rows') as FormArray;
  }

  // Add a new row to the FormArray
  addRow() {
    if (this.tableForm.invalid) {
      alert('Please fill all required fields before adding a new row!');
      return; // Prevent adding a new row
    }
    const newRow = this.fb.group({
      id: [this.rows.length + 1],  // Auto-incrementing ID
      name: ['', Validators.required],  // Required field
      age: [null, [Validators.required, Validators.min(0)]],  // Required and min value validation
      email: ['', [Validators.required, Validators.email]]  // Email validation
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
    console.log('Form Data:', this.tableForm.value);
    if (this.tableForm.valid) {
      // Handle form submission (e.g., send to backend)
      alert('Form saved successfully!');
    } else {
      alert('Form is invalid!');
    }
  }

}

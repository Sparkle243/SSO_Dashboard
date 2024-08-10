import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
public submited:boolean=false
 public  personList: any[]=[];
  displayTable: boolean=true;
  constructor(private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  get f(){

     return this.contactForm.controls
  }
  
  onClickAdd(){

    if(this.contactForm.invalid == true){

    this.submited = true

    }else{
      console.log("this.contactForm",this.contactForm);
      this.submited = false;

      let obj={
        name:this.contactForm.value.name,
        mobileNumber:this.contactForm.value.mobileNumber,
        email:this.contactForm.value.email,
      }

      this.personList.push(obj);
      this.contactForm.reset()
      this.displayTable = false

    }

  }

}

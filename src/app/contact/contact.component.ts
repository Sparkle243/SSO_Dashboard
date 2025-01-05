import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
public submited:boolean=false
 public  employeeList: any= [
  { employeeid: 101, name: 'Carla Espinosa', position: 'Head Nurse', registered: 'Yes', ssn: '111111110', email: 'carla@example.com' },
  { employeeid: 102, name: 'Laverne Roberts', position: 'Nurse', registered: 'Yes', ssn: '222222220', email: 'laverne@example.com' },
  { employeeid: 103, name: 'Paul Flowers', position: 'Nurse', registered: 'No', ssn: '333333330', email: 'paul@example.com' },
  { employeeid: 104, name: 'James Williams', position: 'Doctor', registered: 'Yes', ssn: '444444440', email: 'james@example.com' },
  { employeeid: 105, name: 'Susan Clark', position: 'Nurse', registered: 'No', ssn: '555555550', email: 'susan@example.com' },
  { employeeid: 106, name: 'Mary Adams', position: 'Surgeon', registered: 'Yes', ssn: '666666660', email: 'mary@example.com' },
  { employeeid: 107, name: 'David Johnson', position: 'Nurse', registered: 'Yes', ssn: '777777770', email: 'david@example.com' },
  { employeeid: 108, name: 'Laura White', position: 'Nurse', registered: 'Yes', ssn: '888888880', email: 'laura@example.com' },
  { employeeid: 109, name: 'Michael Brown', position: 'Doctor', registered: 'No', ssn: '999999990', email: 'michael@example.com' },
  { employeeid: 110, name: 'Robert Harris', position: 'Head Nurse', registered: 'Yes', ssn: '101010100', email: 'robert@example.com' },
  { employeeid: 111, name: 'Patricia Lee', position: 'Nurse', registered: 'Yes', ssn: '111111110', email: 'patricia@example.com' },
  { employeeid: 112, name: 'John Scott', position: 'Surgeon', registered: 'No', ssn: '121212120', email: 'john@example.com' },
  { employeeid: 113, name: 'Jessica Martin', position: 'Nurse', registered: 'Yes', ssn: '131313130', email: 'jessica@example.com' },
  { employeeid: 114, name: 'William Walker', position: 'Doctor', registered: 'Yes', ssn: '141414140', email: 'william@example.com' },
  { employeeid: 115, name: 'Linda Hall', position: 'Nurse', registered: 'No', ssn: '151515150', email: 'linda@example.com' },
  { employeeid: 116, name: 'Karen Young', position: 'Nurse', registered: 'Yes', ssn: '161616160', email: 'karen@example.com' },
  { employeeid: 117, name: 'Thomas King', position: 'Surgeon', registered: 'Yes', ssn: '171717170', email: 'thomas@example.com' },
  { employeeid: 118, name: 'Dorothy White', position: 'Nurse', registered: 'No', ssn: '181818180', email: 'dorothy@example.com' },
  { employeeid: 119, name: 'Steven Harris', position: 'Head Nurse', registered: 'Yes', ssn: '191919190', email: 'steven@example.com' },
  { employeeid: 120, name: 'James Taylor', position: 'Nurse', registered: 'No', ssn: '202020200', email: 'james.taylor@example.com' },
  { employeeid: 121, name: 'Elizabeth Green', position: 'Doctor', registered: 'Yes', ssn: '212121210', email: 'elizabeth@example.com' },
  { employeeid: 122, name: 'Anthony Brown', position: 'Nurse', registered: 'Yes', ssn: '222222220', email: 'anthony@example.com' },
  { employeeid: 123, name: 'Margaret Lopez', position: 'Nurse', registered: 'No', ssn: '232323230', email: 'margaret@example.com' },
  { employeeid: 124, name: 'Brian Perez', position: 'Surgeon', registered: 'Yes', ssn: '242424240', email: 'brian@example.com' },
  { employeeid: 125, name: 'Emma Nelson', position: 'Nurse', registered: 'Yes', ssn: '252525250', email: 'emma@example.com' },
  { employeeid: 126, name: 'Richard Adams', position: 'Doctor', registered: 'No', ssn: '262626260', email: 'richard@example.com' },
  { employeeid: 127, name: 'Sophia Robinson', position: 'Nurse', registered: 'Yes', ssn: '272727270', email: 'sophia@example.com' },
  { employeeid: 128, name: 'Jack Davis', position: 'Nurse', registered: 'Yes', ssn: '282828280', email: 'jack@example.com' },
  { employeeid: 129, name: 'Olivia Martinez', position: 'Surgeon', registered: 'Yes', ssn: '292929290', email: 'olivia@example.com' },
  { employeeid: 130, name: 'George Harris', position: 'Head Nurse', registered: 'Yes', ssn: '303030300', email: 'george@example.com' },
  { employeeid: 131, name: 'Sarah Clark', position: 'Nurse', registered: 'No', ssn: '313131310', email: 'sarah@example.com' },
  { employeeid: 132, name: 'Samuel Wilson', position: 'Nurse', registered: 'Yes', ssn: '323232320', email: 'samuel@example.com' },
  { employeeid: 133, name: 'Barbara King', position: 'Doctor', registered: 'No', ssn: '333333330', email: 'barbara@example.com' },
  { employeeid: 134, name: 'Kevin Roberts', position: 'Nurse', registered: 'Yes', ssn: '343434340', email: 'kevin@example.com' },
  { employeeid: 135, name: 'Natalie Evans', position: 'Nurse', registered: 'No', ssn: '353535350', email: 'natalie@example.com' },
  { employeeid: 136, name: 'Frank Allen', position: 'Surgeon', registered: 'Yes', ssn: '363636360', email: 'frank@example.com' },
  { employeeid: 137, name: 'Mary Hill', position: 'Nurse', registered: 'Yes', ssn: '373737370', email: 'mary.hill@example.com' },
  { employeeid: 138, name: 'Thomas Martinez', position: 'Head Nurse', registered: 'No', ssn: '383838380', email: 'thomas.martinez@example.com' },
  { employeeid: 139, name: 'Brian Thompson', position: 'Nurse', registered: 'Yes', ssn: '393939390', email: 'brian.thompson@example.com' },
  { employeeid: 140, name: 'Carol White', position: 'Doctor', registered: 'No', ssn: '404040400', email: 'carol@example.com' },
  { employeeid: 141, name: 'Jason Robinson', position: 'Nurse', registered: 'Yes', ssn: '414141410', email: 'jason@example.com' },
  { employeeid: 142, name: 'Linda Harris', position: 'Nurse', registered: 'No', ssn: '424242420', email: 'linda.harris@example.com' },
  { employeeid: 143, name: 'Daniel Martinez', position: 'Surgeon', registered: 'Yes', ssn: '434343430', email: 'daniel@example.com' },
  { employeeid: 144, name: 'Samuel Thompson', position: 'Nurse', registered: 'Yes', ssn: '444444440', email: 'samuel.thompson@example.com' },
  { employeeid: 145, name: 'Janet Lewis', position: 'Nurse', registered: 'No', ssn: '454545450', email: 'janet@example.com' },
  { employeeid: 146, name: 'Edward Scott', position: 'Doctor', registered: 'Yes', ssn: '464646460', email: 'edward@example.com' },
  { employeeid: 147, name: 'Jessica Evans', position: 'Nurse', registered: 'Yes', ssn: '474747470', email: 'jessica.evans@example.com' },
  { employeeid: 148, name: 'Anthony Martinez', position: 'Nurse', registered: 'No', ssn: '484848480', email: 'anthony.martinez@example.com' },
  { employeeid: 149, name: 'Grace Roberts', position: 'Surgeon', registered: 'Yes', ssn: '494949490', email: 'grace@example.com' },
  { employeeid: 150, name: 'Michael Nelson', position: 'Nurse', registered: 'Yes', ssn: '505050500', email: 'michael.nelson@example.com' }
];;
  displayTable: boolean=true;
  constructor(private fb: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.displayTable = false
  }
  get f(){

     return this.contactForm.controls
  }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#employeeTable').DataTable();  // Initialize DataTable
    });
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

      this.employeeList.push(obj);
      this.contactForm.reset()
      this.displayTable = false

    }

  }

}

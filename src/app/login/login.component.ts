import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralserviceService } from '../generalservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  usernameSignUp: any;
  passwordSignUp: any;
  emailSignUp: any;
  loginOrSignup:boolean=true

  signupForm!: FormGroup;
  public submited:boolean=false
  constructor(private router: Router,private fb: FormBuilder,private service:GeneralserviceService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(buttonType: string){
    if (buttonType === 'register') {
      console.log('Register button clicked');
      this.loginOrSignup = false
      this.submited = false
    } else if (buttonType === 'login') {
      console.log('Login button clicked');
      this.loginOrSignup = true
    }

    if(buttonType === 'login'){
      this.onSubmitLogin()
    }else{
      this.onSubmitSignUp()
    }

  }

  onSubmitLogin() {
    localStorage.setItem('isLoggedIn', 'false');
    if (this.username === 'admin' || 'sunil' && this.password === '1') {
      console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
      localStorage.setItem('isLoggedIn', 'true');
      console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
      // this.toastr.success('Hello world!', 'Toastr fun!');
      this.router.navigate(['/dashboard']);
      let obj={
        userName:this.username,
        // password:this.password,
      }

      this.service.setLoginData(obj);
    } else {

      if(this.username == ''){
        Swal.fire({
          title: '',
          text: 'Please Enter User Name!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Logout!',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result) {
            
          } else {
            
          }
        });
      }else{
        Swal.fire({
          title: '',
          text: 'Please Enter Password!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Logout!',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result) {
            
          } else {
            
          }
        });
      }
      
  
      // this.toastr.error('This is not good!', 'Oops!');
    }
  }
  onSubmitSignUp() {
    localStorage.setItem('isLoggedIn', 'false');
   
    if (this.signupForm.invalid == false) {

      this.submited = false
      console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
      // localStorage.setItem('isLoggedIn', 'true');
      Swal.fire({
        title: 'Successfully Created ',
        text: 'Given Deatils Saved Successfully',
        icon: 'warning',
        // showCancelButton: true,
        // confirmButtonText: 'Yes, Logout!',
        cancelButtonText: 'Ok'
      }).then((result) => {
        if (result) {
          
        } else {
          
        }
      });

      // this.router.navigate(['/dashboard']);
    } else {

      if(this.signupForm.value.name == ''){
        Swal.fire({
          title: '',
          text: 'Please Enter User Name!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Logout!',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result) {
            
          } else {
            
          }
        });
      }else if(this.signupForm.value.mobileNumber == ''){
        Swal.fire({
          title: '',
          text: 'Please Enter Mobile Number!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Logout!',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result) {
            
          } else {
            
          }
        });
      }else{
        Swal.fire({
          title: '',
          text: 'Please Enter Email !',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Yes, Logout!',
          cancelButtonText: 'Ok'
        }).then((result) => {
          if (result) {
            
          } else {
            
          }
        });
      }
      // this.submited = true
      // Swal.fire({
      //   title: 'Invalid  Credentials?',
      //   text: 'Please Enter Valid   Credentials!',
      //   icon: 'warning',
      //   // showCancelButton: true,
      //   // confirmButtonText: 'Yes, Logout!',
      //   cancelButtonText: 'Ok'
      // }).then((result) => {
      //   if (result) {
          
      //   } else {
          
      //   }
      // });
  
      // this.toastr.error('This is not good!', 'Oops!');
    }
  }
  get f(){

    return this.signupForm.controls
 }

 
}

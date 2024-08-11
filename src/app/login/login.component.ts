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

 

  usernameSignUp: any;
  passwordSignUp: any;
  emailSignUp: any;
  loginOrSignup:boolean=true

  signupForm!: FormGroup;
  loginForm!: FormGroup;
  
  public submited:boolean=false
  public submit:boolean=false
  constructor(private router: Router,private fb: FormBuilder,private service:GeneralserviceService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      
    });
  }

  onSubmit(button:any){
    

    if(button === 'c'){
      this.loginOrSignup = false
      this.submit = false
    }else{
      this.loginOrSignup = true
      this.submited = false
    }
    // if (buttonType === 'register') {
    //   console.log('Register button clicked');
    //   this.loginOrSignup = false
    //   this.submited = false
    // } else if (buttonType === 'login') {
    //   console.log('Login button clicked');
    //   this.loginOrSignup = true
    // }

    // if(buttonType === 'login'){
    //   this.onSubmitLogin()
    // }else{
    //   this.onSubmitSignUp()
    // }

  }

  onSubmitLogin() {
    localStorage.setItem('isLoggedIn', 'false');
    if (this.loginForm.invalid == false) {
      console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
      localStorage.setItem('isLoggedIn', 'true');
      console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
      // this.toastr.success('Hello world!', 'Toastr fun!');
      this.router.navigate(['/dashboard']);
      let obj={
        userName:this.loginForm.value.username,
        // password:this.password,
      }

      this.service.setLoginData(obj);
    } else {

      
      
  this.submit = true
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

      this.submited = true
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

 get L(){

  return this.loginForm.controls
}
}

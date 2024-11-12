import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private router: Router,private fb: FormBuilder,private service:GeneralserviceService,private toastr:ToastrService) {}

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

  // onSubmitLogin() {
  //   localStorage.setItem('isLoggedIn', 'false');
    
  //   if (this.loginForm.invalid == false) {
  //     console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
  //     localStorage.setItem('isLoggedIn', 'true');
  //     console.log("localStorage.getItem('isLoggedIn')",localStorage.getItem('isLoggedIn'))
  //     // this.toastr.success('Hello world!', 'Toastr fun!');
  //     this.router.navigate(['/dashboard']);
  //     let obj={
  //       userName:this.loginForm.value.username,
  //       // password:this.password,
  //     }

  //     this.service.setLoginData(obj);
  //   } else {

      
      
  // this.submit = true
  //     // this.toastr.error('This is not good!', 'Oops!');
  //   }
  // }
 
  
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
onSubmitLogin() {
  if (this.loginForm.invalid) {
    this.submit = true; // Show validation messages
    return;
  }

  const username = this.loginForm.value.username;
  const password = this.loginForm.value.password;

  // Ideally, replace this with an API call
  this.validateUser(username, password).then(userData => {
    console.log('userData',userData)
    if (userData) {
      this.service.setLoginData(userData);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      Swal.fire('Invalid credentials', 'Please check your username and password.', 'error');
      // this.toastr.error('Please check your username and password', 'Error');
    }
  }).catch(error => {
    console.error('Error during login:', error);
    // this.toastr.error ('An error occurred during login. Please try again.', 'Login error');
    Swal.fire('Login error', 'An error occurred during login. Please try again.', 'error');
  });
}

// Simulated user validation function (replace this with your actual API call)
validateUser(username: string, password: string): Promise<any> {
  return new Promise((resolve, reject) => {
    // Replace this logic with actual API calls for user validation
    const mockAdminUser = { username: 'admin', password: '12345', role: 'admin' };
    const mockRegularUser = { username: 'user', password: '12345', role: 'user' };

    if (username === mockAdminUser.username && password === mockAdminUser.password) {
      resolve(mockAdminUser); // Successful admin login
    } else if (username === mockRegularUser.username && password === mockRegularUser.password) {
      resolve(mockRegularUser); // Successful regular user login
    } else {
      resolve(null); // Invalid credentials
    }
  });
}

}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  firstName: String = ""
  lastName: String = ""
  email = "" // auto - string 
  password: String = ""

  userForm: FormGroup
  constructor(private tostr: ToastrService, private router: Router, private sessionService: SessionService) {
   
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required])  //, Validators.minLength(8), this.strongPassword
    })
  }

  ngOnInit(): void {
  }

  adduser() {
    console.log(this.userForm.value);
    if(this.userForm.valid){
      this.sessionService.signupApi(this.userForm.value).subscribe(resp => {
        if (resp) {
          this.tostr.success("signup", "", { timeOut: 3000 })
          this.router.navigateByUrl("/login")
          console.log(resp);
        }
      },err =>{
        this.tostr.error(err)
      })
    }else{
      this.tostr.error("Please Fill Details")
    }
  }


  // strongPassword(password: AbstractControl): ValidationErrors | null {
  //   let isUpper = false
  //   let isLower = false
  //   let isSpecial = false
  //   let isDigit = false
  //   let passwordValue = password.value as string

  //   if (passwordValue.length < 8)
  //     return null

  //   for (let i = 0; i < passwordValue.length; i++) {
  //     if (passwordValue.charAt(i) >= 'A' && passwordValue.charAt(i) <= 'Z') {
  //       isUpper = true
  //     } else if (passwordValue.charAt(i) >= 'a' && passwordValue.charAt(i) <= 'z') {
  //       isLower = true
  //     }
  //     else if (passwordValue.charAt(i) == '$' || passwordValue.charAt(i) == '#' || passwordValue.charAt(i) == '@') {
  //       isSpecial = true
  //     }
  //     else if (passwordValue.charAt(i) >= '0' && passwordValue.charAt(i) <= '9') {
  //       isDigit = true
  //     }
  //   }

  //   if (isLower && isUpper && isSpecial && isDigit)
  //     return null
  //   else
  //     return { "strongPassword": true }
  //   // return null;//no errors 
  // }
  // signup() {
  //   let user = {
  //     "firstName": this.firstName,
  //     "lastName": this.lastName,
  //     "email": this.email,
  //     "password": this.password
  //   }

  //   this.sessionService.signupApi(user).subscribe(resp => {
  //     if (resp) {
  //       this.tostr.success("signup", "", { timeOut: 3000 })
  //       this.router.navigateByUrl("/login")
  //       console.log(resp);
        
  //     }
  //   },err =>{
  //     this.tostr.error(err)
  //   })
  // }
}

  

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password : String = ""
 
  userForm: FormGroup
  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router) { 

  this.userForm = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required) 
  })
}

  ngOnInit(): void {
  }
 
  login(){
  if(this.userForm.valid){
   // let user = {"email":this.email,"password":this.password}
   this.sessionService.loginApi(this.userForm.value).subscribe(resp=>{
     localStorage.setItem("userId",resp.data.userId)
    this.toastr.success("Login Done")
    console.log(resp.data.role.roleName);
    if(resp.data.role.roleName=="user"){
      
      this.router.navigateByUrl("/user/home")
    }else if(resp.data.role.roleName=="admin"){
        this.router.navigateByUrl("/admin/dashboard")
      }
    },err =>{
      this.toastr.error("Invalid Creditianls")
    })
   }
   else{
     this.toastr.error("Please Enter Details Correctly")
   }
  }
  
}
// function myFunction() {
//   var x = document.getElementById("myInput");
//   if (this.password === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
  



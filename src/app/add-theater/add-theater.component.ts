import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTheaterService } from '../add-theater.service';

@Component({
  selector: 'app-add-theater',
  templateUrl: './add-theater.component.html',
  styleUrls: ['./add-theater.component.css']
})

export class AddTheaterComponent implements OnInit {

  theaterForm:FormGroup
  submitted= false;

  constructor(private addtheaterService:AddTheaterService,private toastr:ToastrService,private router:Router) { 
    this.theaterForm = new FormGroup({
      theaterName : new FormControl('',Validators.required),
      morningShowTime: new FormControl('',Validators.required),
      noonShowTime: new FormControl('',Validators.required),
      nightShowTime: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
  }

  addtheater(){
    console.log(this.theaterForm.value);
    this.addtheaterService.addTheater(this.theaterForm.value).subscribe(resp=>{
      this.toastr.success("Theater Added")
      this.router.navigateByUrl("/admin/dashboard")
    })
    
  }
}

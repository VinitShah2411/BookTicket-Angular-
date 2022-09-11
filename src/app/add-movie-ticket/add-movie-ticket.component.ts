import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';


@Component({
  selector: 'app-add-movie-ticket',
  templateUrl: './add-movie-ticket.component.html',
  styleUrls: ['./add-movie-ticket.component.css']
})
export class AddMovieTicketComponent implements OnInit {
  
  adminForm:FormGroup
  submitted = false;


  constructor(private addmovieService:AddMovieService,private toastr:ToastrService,private route:Router) {

    this.adminForm = new FormGroup({
      movieName : new FormControl('',Validators.required),
      duration : new FormControl('',Validators.required),
      // genre : new FormControl('',Validators.required),
      releaseDate :new FormControl('',Validators.required),
      rating:new FormControl('',Validators.required),
      moviePic:new FormControl('',Validators.required),
      watchTrailer:new FormControl('',Validators.required),
      movieDetails:new FormControl('',Validators.required),
    })
   }
  ngOnInit(): void {
   
  }
  
  addmovie(){
    console.log(this.adminForm.value);
      this.addmovieService.addMovie(this.adminForm.value).subscribe(resp=>{
        this.toastr.success("Movie Added")
        this.route.navigateByUrl("/admin/dashboard")
      })
    }
  }
       
        
      
    
  
  
  
  
  


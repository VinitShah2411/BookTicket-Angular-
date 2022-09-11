import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';
import { AddTheaterService } from '../add-theater.service';

@Component({
  selector: 'app-list-theaters',
  templateUrl: './list-theaters.component.html',
  styleUrls: ['./list-theaters.component.css']
})
export class ListTheatersComponent implements OnInit {
  theaters:Array<any>=[] 
  movieName:string=""
  movieId=0
  constructor(private theaterService:AddTheaterService,private toastr:ToastrService,private movieService:AddMovieService,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listAllTheaters()
    this.movieId = this.aroute.snapshot.params["movieId"]
    this.getMoviesById(this.movieId)
//     this.getAllMoviesById(this.movieId)
  }
  
  listAllTheaters(){
    this.theaterService.getAllTheaters().subscribe(resp=>{
      this.theaters = resp
    },err=>{
      this.toastr.error(err)
    })
  }

  getMoviesById(movieId:any){
    this.movieService.getMoviesById(movieId).subscribe(res=>{
      this.movieName= res.movieName
      // console.log(this.movieName);
    },err=>{
        this.toastr.error(err)
      })
    }

 
}


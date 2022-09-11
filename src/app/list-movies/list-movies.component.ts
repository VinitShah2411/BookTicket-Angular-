import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  constructor(private movieService:AddMovieService,private toastr:ToastrService,private router:Router) { }
  movies :Array<any> = []
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(resp=>{
      this.movies = resp
    })
  }

  deletemovie(id:any){
    console.log("delete"+id);
    this.movieService.deleteMovie(id).subscribe(resp=>{
      console.log(resp);
      
      this.toastr.success("Movie deleted")
      this.movies = this.movies.filter(m=>m.movieId != id)
      // this.router.navigateByUrl("/listmovies")
    },err=>{
      console.log(err);
      this.toastr.error("movie delete error")
      
     })
    }
  
    
  }



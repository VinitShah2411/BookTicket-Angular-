import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private addmovie:AddMovieService,private toastr:ToastrService) { }
  movies:Array<any>=[]
  ngOnInit(): void {
    this.listAllMovie()
  }

  listAllMovie(){
      this.addmovie.getAllMovies().subscribe(res=>{
        this.movies = res
        // localStorage.setItem("movieId",res.)
        // console.log(this.movies);
        // console.log(res);
      },err=>{
          this.toastr.error(err)
          // console.log(err);
        })
      }

    
}
        
        
          

 

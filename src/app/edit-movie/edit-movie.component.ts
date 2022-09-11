import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private aroute: ActivatedRoute, private movieService: AddMovieService, private toastr: ToastrService, private router: Router) { }

  movieId = 0
  movieName = ""
  duration = 0
  releaseDate = ""
  rating = 0
  watchTrailer = ""
  movieDetails = ""

  ngOnInit(): void {
    this.movieId = this.aroute.snapshot.params["movieId"]
    this.getMovieById()
  }

  getMovieById() {
    this.movieService.getAllMoviesById(this.movieId).subscribe(resp=>{
      console.log(resp);
      this.movieName=resp.movieName
      this.duration=resp.duration
      this.releaseDate=resp.releaseDate
      this.rating=resp.rating
      this.watchTrailer=resp.watchTrailer
      this.movieDetails=resp.movieDetails
    })
  }

  updateMovie() {
    let movie = { "movieId": this.movieId, "movieName": this.movieName, "duration": this.duration, "releaseDate": this.releaseDate, "rating": this.rating, "watchTrailer": this.watchTrailer, "movieDetails": this.movieDetails }
    this.movieService.updateMovie(movie).subscribe(resp=>{
      this.toastr.success("Movie Updated")
      this.router.navigateByUrl("/admin/listmovies")
    })
  }
}

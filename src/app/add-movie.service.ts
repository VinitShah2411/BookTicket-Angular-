import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddMovieService {

  constructor(private httpClient:HttpClient) { }

  addMovie(movie:any):Observable<any>{
    return this.httpClient.post(environment.url+"admin/addmovieticket",movie)
  }

  getAllMovies():Observable<any>{
    return this.httpClient.get(environment.url+"admin/movie")
  }

  deleteMovie(movieId:any):Observable<any>{
    return this.httpClient.delete(environment.url+"admin/movie/"+movieId)
  }

  getAllMoviesById(movieId:any):Observable<any>{
    return this.httpClient.get(environment.url+"admin/movie/"+movieId)
  }  

  getMoviesById(movieId:any):Observable<any>{
    return this.httpClient.get(environment.url+"public/movie/"+movieId)
  }  

  updateMovie(movie:any):Observable<any>{
    return this.httpClient.put(environment.url+"admin/movie",movie)
  }
} 

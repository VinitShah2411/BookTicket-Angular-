import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddTheaterService {

  constructor(private httpclient:HttpClient) { }

  addTheater(theater:any):Observable<any>{
    return this.httpclient.post(environment.url+"admin/addtheater",theater)
  }

  getAllTheaters():Observable<any>{
    return this.httpclient.get(environment.url+"admin/theater")
  }

  deleteTheater(theaterId:any):Observable<any>{
    return this.httpclient.delete(environment.url+"admin/theater/"+theaterId)
  }

  getAllTheatersById(theaterId:any):Observable<any>{
    return this.httpclient.get(environment.url+"admin/theater/"+theaterId)
  }  

  getTheatersById(theaterId:any):Observable<any>{
    return this.httpclient.get(environment.url+"public/theater/"+theaterId)
  }  

  updateTheater(theater:any):Observable<any>{
    return this.httpclient.put(environment.url+"admin/theater",theater)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  constructor(private httpclient:HttpClient) { }

  getAllSeats():Observable<any>{
    return this.httpclient.get(environment.url+"admin/movie")
  }
}

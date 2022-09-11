import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddMovieService } from '../add-movie.service';
import { AddTheaterService } from '../add-theater.service';
import { SeatService } from '../seat.service';

@Component({
  selector: 'app-seat-plans',
  templateUrl: './seat-plans.component.html',
  styleUrls: ['./seat-plans.component.css']
})
export class SeatPlansComponent implements OnInit {
  
  theaters:Array<any>=[] 
  theaterName:string=""
  morningShowTime:string=""
  noonShowTime:string=""
  nightShowTime:string=""
  theaterId=0
  seats:Array<any>=[] 
  seatId=0
  constructor(private theaterService:AddTheaterService,private toastr:ToastrService,private aroute:ActivatedRoute,
    private seatService:SeatService
    ) { }

  ngOnInit(): void {
    this.theaterId = this.aroute.snapshot.params["theaterId"]
    this.getTheaterById(this.theaterId)
  }

  getTheaterById(theaterId:any){
    this.theaterService.getTheatersById(theaterId).subscribe(res=>{
      this.theaterName= res.theaterName
      this.morningShowTime = res.morningShowTime
      this.noonShowTime = res.noonShowTime
      this.nightShowTime = res.nightShowTime
      // console.log(this.movieName);
    },err=>{
        this.toastr.error(err)
      })
    }
    
    
    C1=0
    toggle = false;
    status = "Enable";

  
  
    enableDisable(i:any) {
      this.toggle = !this.toggle;
      this.status = this.toggle ? "Enable" : "Disable";
      if(this.status == "Enable"){
        this.seats[i].selected = "true"
        document.getElementById("C1")?.setAttribute("style", "background-color:green")
      }else{
        document.getElementById("C1")?.setAttribute("style", "background-color:blue")
      }
    }

    enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? "Enable" : "Disable";
    }

    getAllSeats(){
      this.seatService.getAllSeats().subscribe(resp=>{
        this.seats = resp
      },err=>{
        this.toastr.error(err)})
    }

   

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTheaterService } from '../add-theater.service';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private teaterService:AddTheaterService,private aroute:ActivatedRoute,private toastr:ToastrService,private router:Router) { }

  theaterId = 0
  theaterName = ""
  morningShowTime = ""
  noonShowTime = ""
  nightShowTime = ""
  address = ""

  ngOnInit(): void {
    this.theaterId = this.aroute.snapshot.params["theaterId"]
    this.getTheaterById()
  }

  getTheaterById(){
    this.teaterService.getAllTheatersById(this.theaterId).subscribe(resp=>{
      console.log(resp);
      this.theaterName = resp.theaterName
      this.morningShowTime = resp.morningShowTime
      this.noonShowTime = resp.noonShowTime
      this.nightShowTime = resp.nightShowTime
      this.address = resp.address
    })
  }

  updateTheater(){
    let theater = {"theaterId":this.theaterId,"theaterName":this.theaterName,"morningShowTime":this.morningShowTime,"noonShowTime":this.noonShowTime,"nightShowTime":this.nightShowTime,"address":this.address}
    this.teaterService.updateTheater(theater).subscribe(resp=>{
      this.toastr.success("Theater Updated")
      this.router.navigateByUrl("/admin/listoftheaters")
    })
  }
}

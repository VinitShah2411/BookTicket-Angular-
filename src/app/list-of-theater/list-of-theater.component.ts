import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddTheaterService } from '../add-theater.service';

@Component({
  selector: 'app-list-of-theater',
  templateUrl: './list-of-theater.component.html',
  styleUrls: ['./list-of-theater.component.css']
})
export class ListOfTheaterComponent implements OnInit {

  constructor(private theaterservice:AddTheaterService,private toastr:ToastrService) { }
  theaters:Array<any>=[]

  ngOnInit(): void {
    this.listAllTheaters()
  }

  listAllTheaters(){
    this.theaterservice.getAllTheaters().subscribe(resp=>{
      this.theaters = resp
    })
  }

  deletetheater(id:any){
    console.log("delete"+id);
    this.theaterservice.deleteTheater(id).subscribe(resp=>{
      console.log(resp);
      
      this.toastr.success("Theater deleted")
      this.theaters = this.theaters.filter(t=>t.theaterId != id)
    },err=>{
      console.log(err);
      this.toastr.error("Theater delete error"+err)
     })
    }
}

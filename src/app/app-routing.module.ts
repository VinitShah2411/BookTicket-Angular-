import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieTicketComponent } from './add-movie-ticket/add-movie-ticket.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { EditTheaterComponent } from './edit-theater/edit-theater.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { ListOfTheaterComponent } from './list-of-theater/list-of-theater.component';
import { ListTheatersComponent } from './list-theaters/list-theaters.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SeatPlansComponent } from './seat-plans/seat-plans.component';
import { SignupComponent } from './signup/signup.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';


const routes: Routes = [
  // {component:SignupComponent,path:""},
  {component:ErrorPageComponent,path:""},
  {component:SignupComponent,path:"signup"},
  {component:LoginComponent,path:"login"},
  {component:LogoutComponent,path:"logout"},
  
  {component:UserLayoutComponent,path:"user",children:[
    {component:HomeComponent,path:"home"},
    {component:MovieListComponent,path:"movie-list"},
    {component:BookTicketComponent,path:"book-ticket/:movieId"},
    {component:SeatPlansComponent,path:"seatplan/:theaterId"},
    {component:ListTheatersComponent,path:"listtheaters/:movieId"}
  ]},

  {component:AdminLayoutComponent,path:"admin",children:[
    {component:DashboardComponent,path:"dashboard"},
    {component:AddMovieTicketComponent,path:"addmovieticket"},
    {component:BookTicketComponent,path:"bookticket"},
    {component:ListMoviesComponent,path:"listmovies"},
    {component:EditMovieComponent,path:"editmovie/:movieId"},
    {component:AddTheaterComponent,path:"addTheater"},
    // {component:SeatPlansComponent,path:"seatplan"},
    {component:ListOfTheaterComponent,path:"listoftheaters"},
    {component:EditTheaterComponent,path:"edittheater/:theaterId"}
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import{HttpClientModule} from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { LogoutComponent } from './logout/logout.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AddMovieTicketComponent } from './add-movie-ticket/add-movie-ticket.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { SeatPlansComponent } from './seat-plans/seat-plans.component';
import { ListTheatersComponent } from './list-theaters/list-theaters.component';
import { ListOfTheaterComponent } from './list-of-theater/list-of-theater.component';
import { EditTheaterComponent } from './edit-theater/edit-theater.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MovieListComponent,
    ErrorPageComponent,
    UserLayoutComponent,
    LogoutComponent,
    BookTicketComponent,
    AdminLayoutComponent,
    AddMovieTicketComponent,
    ListMoviesComponent,
    EditMovieComponent,
    AddTheaterComponent,
    SeatPlansComponent,
    ListTheatersComponent,
    ListOfTheaterComponent,
    EditTheaterComponent,
    // CheckboxModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

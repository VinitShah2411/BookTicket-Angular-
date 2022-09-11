import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieTicketComponent } from './add-movie-ticket.component';

describe('AddMovieTicketComponent', () => {
  let component: AddMovieTicketComponent;
  let fixture: ComponentFixture<AddMovieTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

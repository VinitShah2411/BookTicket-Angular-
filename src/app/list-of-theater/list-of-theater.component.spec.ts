import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTheaterComponent } from './list-of-theater.component';

describe('ListOfTheaterComponent', () => {
  let component: ListOfTheaterComponent;
  let fixture: ComponentFixture<ListOfTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfTheaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

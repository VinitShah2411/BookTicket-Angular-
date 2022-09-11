import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatPlansComponent } from './seat-plans.component';

describe('SeatPlansComponent', () => {
  let component: SeatPlansComponent;
  let fixture: ComponentFixture<SeatPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

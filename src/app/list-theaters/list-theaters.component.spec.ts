import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTheatersComponent } from './list-theaters.component';

describe('ListTheatersComponent', () => {
  let component: ListTheatersComponent;
  let fixture: ComponentFixture<ListTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTheatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

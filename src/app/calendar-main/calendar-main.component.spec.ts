import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMainComponent } from './calendar-main.component';

describe('CalendarMainComponent', () => {
  let component: CalendarMainComponent;
  let fixture: ComponentFixture<CalendarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

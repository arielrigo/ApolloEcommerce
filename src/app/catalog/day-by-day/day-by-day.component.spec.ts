import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayByDayComponent } from './day-by-day.component';

describe('DayByDayComponent', () => {
  let component: DayByDayComponent;
  let fixture: ComponentFixture<DayByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayByDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

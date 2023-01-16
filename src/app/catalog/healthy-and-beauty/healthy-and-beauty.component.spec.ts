import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyAndBeautyComponent } from './healthy-and-beauty.component';

describe('HealthyAndBeautyComponent', () => {
  let component: HealthyAndBeautyComponent;
  let fixture: ComponentFixture<HealthyAndBeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthyAndBeautyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyAndBeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

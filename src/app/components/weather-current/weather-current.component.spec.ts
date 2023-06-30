import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentComponent } from './weather-current.component';

describe('WeatherCurrentComponent', () => {
  let component: WeatherCurrentComponent;
  let fixture: ComponentFixture<WeatherCurrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCurrentComponent]
    });
    fixture = TestBed.createComponent(WeatherCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

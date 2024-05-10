import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherPage } from './weather.page';
import { IonicModule } from '@ionic/angular';
describe('WeatherPage', () => {
  let component: WeatherPage;
  let fixture: ComponentFixture<WeatherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

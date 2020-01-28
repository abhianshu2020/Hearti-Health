import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPredictorResultComponent } from './health-predictor-result.component';

describe('HealthPredictorResultComponent', () => {
  let component: HealthPredictorResultComponent;
  let fixture: ComponentFixture<HealthPredictorResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPredictorResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPredictorResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

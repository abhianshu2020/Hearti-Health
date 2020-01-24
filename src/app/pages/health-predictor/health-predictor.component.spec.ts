import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPredictorComponent } from './health-predictor.component';

describe('HealthPredictorComponent', () => {
  let component: HealthPredictorComponent;
  let fixture: ComponentFixture<HealthPredictorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPredictorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPredictorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

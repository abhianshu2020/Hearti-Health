import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PLoginComponent } from './p-login.component';

describe('PLoginComponent', () => {
  let component: PLoginComponent;
  let fixture: ComponentFixture<PLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

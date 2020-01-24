import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRegisterComponent } from './p-register.component';

describe('PRegisterComponent', () => {
  let component: PRegisterComponent;
  let fixture: ComponentFixture<PRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationControllerComponent } from './registration-controller.component';

describe('RegistrationControllerComponent', () => {
  let component: RegistrationControllerComponent;
  let fixture: ComponentFixture<RegistrationControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

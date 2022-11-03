import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInformationUpdateComponent } from './student-information-update.component';

describe('StudentInformationUpdateComponent', () => {
  let component: StudentInformationUpdateComponent;
  let fixture: ComponentFixture<StudentInformationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentInformationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInformationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

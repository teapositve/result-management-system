import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSignupPageComponent } from './student-signup-page.component';

describe('StudentSignupPageComponent', () => {
  let component: StudentSignupPageComponent;
  let fixture: ComponentFixture<StudentSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

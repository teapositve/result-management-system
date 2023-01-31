import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSignupPageComponent } from './teacher-signup-page.component';

describe('TeacherSignupPageComponent', () => {
  let component: TeacherSignupPageComponent;
  let fixture: ComponentFixture<TeacherSignupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherSignupPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

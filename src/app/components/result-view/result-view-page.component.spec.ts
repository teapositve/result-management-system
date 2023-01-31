import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultViewPageComponent } from './result-view-page.component';

describe('ResultViewPageComponent', () => {
  let component: ResultViewPageComponent;
  let fixture: ComponentFixture<ResultViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

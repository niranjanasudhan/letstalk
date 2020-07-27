import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychotherapistProfileEditComponent } from './psychotherapist-profile-edit.component';

describe('PsychotherapistProfileEditComponent', () => {
  let component: PsychotherapistProfileEditComponent;
  let fixture: ComponentFixture<PsychotherapistProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychotherapistProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychotherapistProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

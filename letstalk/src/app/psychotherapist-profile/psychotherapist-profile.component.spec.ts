import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychotherapistProfileComponent } from './psychotherapist-profile.component';

describe('PsychotherapistProfileComponent', () => {
  let component: PsychotherapistProfileComponent;
  let fixture: ComponentFixture<PsychotherapistProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychotherapistProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychotherapistProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

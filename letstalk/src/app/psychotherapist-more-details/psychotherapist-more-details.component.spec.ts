import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychotherapistMoreDetailsComponent } from './psychotherapist-more-details.component';

describe('PsychotherapistMoreDetailsComponent', () => {
  let component: PsychotherapistMoreDetailsComponent;
  let fixture: ComponentFixture<PsychotherapistMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychotherapistMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychotherapistMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

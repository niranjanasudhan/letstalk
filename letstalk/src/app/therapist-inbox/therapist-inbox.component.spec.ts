import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistInboxComponent } from './therapist-inbox.component';

describe('TherapistInboxComponent', () => {
  let component: TherapistInboxComponent;
  let fixture: ComponentFixture<TherapistInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

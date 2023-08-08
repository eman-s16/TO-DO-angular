import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTimeComponent } from './scheduled-time.component';

describe('ScheduledTimeComponent', () => {
  let component: ScheduledTimeComponent;
  let fixture: ComponentFixture<ScheduledTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduledTimeComponent]
    });
    fixture = TestBed.createComponent(ScheduledTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

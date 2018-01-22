import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIncidentComponent } from './log-incident.component';

describe('LogIncidentComponent', () => {
  let component: LogIncidentComponent;
  let fixture: ComponentFixture<LogIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

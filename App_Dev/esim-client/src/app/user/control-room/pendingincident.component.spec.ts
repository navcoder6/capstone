import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingIncidentComponent } from './pendingincident.component';

describe('PendingIncidentComponent', () => {
  let component: PendingIncidentComponent;
  let fixture: ComponentFixture<PendingIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

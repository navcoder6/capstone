import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecurityIncidentComponent } from './new-security-incident.component';

describe('NewSecurityIncidentComponent', () => {
  let component: NewSecurityIncidentComponent;
  let fixture: ComponentFixture<NewSecurityIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSecurityIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSecurityIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

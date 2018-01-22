import { TestBed, inject } from '@angular/core/testing';

import { EmergencyNotificationService } from './emergency-notification.service';

describe('EmergencyNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmergencyNotificationService]
    });
  });

  it('should be created', inject([EmergencyNotificationService], (service: EmergencyNotificationService) => {
    expect(service).toBeTruthy();
  }));
});

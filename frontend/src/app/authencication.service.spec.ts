import { TestBed, inject } from '@angular/core/testing';

import { AuthencicationService } from './authencication.service';

describe('AuthencicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthencicationService]
    });
  });

  it('should be created', inject([AuthencicationService], (service: AuthencicationService) => {
    expect(service).toBeTruthy();
  }));
});

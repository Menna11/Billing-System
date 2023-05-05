import { TestBed } from '@angular/core/testing';

import { ProfileAndRowDataService } from './profile-and-row-data.service';

describe('ProfileAndRowDataService', () => {
  let service: ProfileAndRowDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAndRowDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AddNewPhoneService } from './add-new-phone.service';

describe('AddNewPhoneService', () => {
  let service: AddNewPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

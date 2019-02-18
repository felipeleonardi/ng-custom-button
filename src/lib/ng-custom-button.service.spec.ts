import { TestBed } from '@angular/core/testing';

import { NgCustomButtonService } from './ng-custom-button.service';

describe('NgCustomButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCustomButtonService = TestBed.get(NgCustomButtonService);
    expect(service).toBeTruthy();
  });
});

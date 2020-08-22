import { TestBed } from '@angular/core/testing';

import { NgDemoLibraryService } from './ng-demo-library.service';

describe('NgDemoLibraryService', () => {
  let service: NgDemoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDemoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

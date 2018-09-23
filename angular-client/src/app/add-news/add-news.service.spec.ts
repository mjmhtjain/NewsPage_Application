import { TestBed, inject } from '@angular/core/testing';

import { AddNewsService } from './add-news.service';

describe('AddNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewsService]
    });
  });

  it('should be created', inject([AddNewsService], (service: AddNewsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ProglanguageService } from './proglanguage.service';

describe('ProglanguagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProglanguageService]
    });
  });

  it('should be created', inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getProgLanguages function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguages).toBeTruthy();
  }));

  it('should have getProgLanguageById function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguageById).toBeTruthy();
  }));

  it('should have getProgLanguagesByName function',
  inject([ProglanguageService], (service: ProglanguageService) => {
    expect(service.getProgLanguagesByName).toBeTruthy();
  }));



});

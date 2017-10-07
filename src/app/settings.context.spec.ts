import { TestBed, inject } from '@angular/core/testing';

import { SettingsContext } from './settings.context';

describe('SettingsContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsContext]
    });
  });

  it('should be created', inject([SettingsContext], (service: SettingsContext) => {
    expect(service).toBeTruthy();
  }));
});

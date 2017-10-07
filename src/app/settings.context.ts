import { Injectable } from '@angular/core';

@Injectable()
export class SettingsContext {

  // request your own key at: http://www.mybustracker.co.uk/?page=API%20Key
  readonly API_KEY: string = 'xxxx';

  constructor() { }

}

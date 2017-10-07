import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsContext } from '../settings.context';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { BusTimesRequest } from './records/bus-times-request';
import { BusTimesResponse } from './records/bus-times-response';

@Injectable()
export class RestService {
  private readonly baseUrl: string = 'http://ws.mybustracker.co.uk/?module=json';

  constructor(private http: HttpClient, private settings: SettingsContext) { }

  public getBusTimesforStopId(stopId: string): Observable<any> {



    return Observable.of('yo');
    // GETBUSTIMES
  }

  public getBusTimes(request: BusTimesRequest): Observable<BusTimesResponse> {
    const url = `${this.baseUrl}&function=getBusTimes`;
    return this.http.get(url).map(r => r as BusTimesResponse);
  }

  // private calculateApplicationKey(): string {

  // Math.floor(Date.now() / 1000) // seconds
  // }
}

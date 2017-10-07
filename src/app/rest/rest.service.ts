import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsContext } from '../settings.context';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5/dist/md5';

import { BusTimesRequest } from './records/bus-times-request';
import { BusTimesResponse } from './records/bus-times-response';
import { TimeRequest } from './records/time-request';

@Injectable()
export class RestService {
  private readonly baseUrl: string = 'https://cors-anywhere.herokuapp.com/http://ws.mybustracker.co.uk/?module=json';

  constructor(private http: HttpClient, private settings: SettingsContext) { }

  public getBusTimesforStopId(stopId: string): Observable<BusTimesResponse> {
    const request = new BusTimesRequest();
    request.key = this.calculateApplicationKey();
    request.timeRequests.push(TimeRequest.fromStopId(stopId));

    return this.getBusTimes(request);
  }

  public getBusTimes(request: BusTimesRequest): Observable<BusTimesResponse> {
    const url = `${this.baseUrl}&function=getBusTimes`;
    return this.http.get(url).map(r => r as BusTimesResponse);
  }

  private calculateApplicationKey(): string {
    const timeStamp = this.getFormatedDateTime();
    const key = timeStamp + this.settings.API_KEY;
    const hashed = Md5.hashStr(key) as string;
    return hashed;
  }

  // The timestamp string is YYYYMMDDHH, where:
  private getFormatedDateTime(): string {
    const date = new Date();
    const ret = `${date.getFullYear()}${date.getMonth}${date.getDay()}${date.getHours()}`;
    return ret;
  }
}

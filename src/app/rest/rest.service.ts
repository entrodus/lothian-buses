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

    const params = new Map<string, string>([
      ['key', this.calculateApplicationKey()],
      ['function', 'getBusTimes'],
      ['stopId1', stopId],
    ]);

    const url = this.getBaseUrlWithParams(params);
    console.log(url);

    // VI.2.9.1 EXAMPLE OF REQUEST
    // http://ws.mybustracker.co.uk/?module=json&key=b2bc78d58f40a6239ccfac773494ac2b&f
    // unction=getBusTimes&stopId1=36232323&stopId2=36235979
    return Observable.of(null);
    // return this.http.get(url).map(r => r as BusTimesResponse);
  }

  private getBaseUrlWithParams(params: Map<string, string>): string {
    let url = this.baseUrl;
    params.forEach((v, k) => url = url + `&${k}=${v}`);
    return url;
  }

  private calculateApplicationKey(): string {
    const timeStamp = this.getFormatedDateTime();
    const key = this.settings.API_KEY + timeStamp;
    const hashed = Md5.hashStr(key) as string;
    return hashed;
  }

  // The timestamp string is YYYYMMDDHH, where:
  private getFormatedDateTime(): string {
    const date = new Date();
    // const ret = `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}`;

    const ret = date.getFullYear().toString()
      + ('0' + (date.getMonth() + 1).toString()).slice(-2)
      + ('0' + (date.getDay() + 1).toString()).slice(-2)
      + ('0' + date.getHours().toString()).slice(-2);
    return ret;
  }
}

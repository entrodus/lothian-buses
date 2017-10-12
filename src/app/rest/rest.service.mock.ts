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
import { PlatformLocation } from '@angular/common';

@Injectable()
export class RestServiceMock {

  constructor(private http: HttpClient, private platformLocation: PlatformLocation) { }

  public getBusTimesforStopId(stopId: string): Observable<BusTimesResponse> {
    const origin = (this.platformLocation as any).location.origin;
    const url = `${origin}/assets/getbustimes-response.json`;

    return this.http.get(url).map(response => {

      const busTimesResponse = new BusTimesResponse();
      Object.assign(busTimesResponse, response);
      return busTimesResponse;
    });

  }

}

import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { Observable } from 'rxjs/Observable';
import { BusTimesResponse } from '../rest/records/bus-times-response';
import { ActivatedRoute, Params } from '@angular/router';

import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-bus-stop-times-page',
  templateUrl: './bus-stop-times-page.component.html',
  styleUrls: ['./bus-stop-times-page.component.css']
})
export class BusStopTimesPageComponent implements OnInit {

  public busTimesResponse$: Observable<BusTimesResponse> = Observable.of(null);

  constructor(private restService: RestService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.busTimesResponse$ = this.activatedRoute
      .params
      .map(params => params['busStopId'])
      .flatMap(busStopId => this.restService.getBusTimesforStopId(busStopId));
  }

}

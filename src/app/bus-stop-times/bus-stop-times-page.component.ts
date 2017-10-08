import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { Observable } from 'rxjs/Observable';
import { BusTimesResponse } from '../rest/records/bus-times-response';

@Component({
  selector: 'app-bus-stop-times-page',
  templateUrl: './bus-stop-times-page.component.html',
  styleUrls: ['./bus-stop-times-page.component.css']
})
export class BusStopTimesPageComponent implements OnInit, OnChanges {
  @Input() busStop: string;
  public busTimesResponse$: Observable<BusTimesResponse>;

  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.busTimesResponse$ = this.restService.getBusTimesforStopId(this.busStop);
  }


}

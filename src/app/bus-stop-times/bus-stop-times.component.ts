import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { BusTimesResponse } from '../rest/records/bus-times-response';

@Component({
  selector: 'app-bus-stop-times',
  templateUrl: './bus-stop-times.component.html',
  styleUrls: ['./bus-stop-times.component.css']
})
export class BusStopTimesComponent implements OnInit {
  @Input() busTimesResponse: BusTimesResponse;

  get stopName(): string {
    const busTime = this.busTimesResponse.busTimes[0];
    const stopName = (!busTime) ? '' : busTime.stopName;
    return stopName;
  }

  ngOnInit() {

  }

}

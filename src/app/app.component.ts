import { Component, OnInit } from '@angular/core';
import { RestService } from './rest/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.restService.getBusTimesforStopId('36237356')
      .subscribe( (response) => console.log(response));
  }
}


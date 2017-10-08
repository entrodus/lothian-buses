import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public busStopId: string = '36237356';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public navigateToBusStopTimes() {
    if (!this.busStopId) {
      return;
    }
    this.router.navigateByUrl(`bus-stop-times/${this.busStopId}`);
  }
}

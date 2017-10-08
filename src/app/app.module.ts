import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SettingsContext } from './settings.context';
import { RestService } from './rest/rest.service';
import { RestServiceMock } from './rest/rest.service.mock';
import { BusStopTimesComponent } from './bus-stop-times/bus-stop-times.component';
import { BusStopTimesPageComponent } from './bus-stop-times/bus-stop-times-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'bus-stop-times/:busStopId', component: BusStopTimesPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BusStopTimesComponent,
    BusStopTimesPageComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    SettingsContext,
    // { provide: RestService, useClass: RestServiceMock },
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

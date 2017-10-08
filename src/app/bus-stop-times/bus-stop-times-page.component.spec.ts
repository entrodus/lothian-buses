import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopTimesPageComponent } from './bus-stop-times-page.component';

describe('BusStopTimesPageComponent', () => {
  let component: BusStopTimesPageComponent;
  let fixture: ComponentFixture<BusStopTimesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusStopTimesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStopTimesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

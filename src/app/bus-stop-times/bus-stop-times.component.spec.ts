import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusStopTimesComponent } from './bus-stop-times.component';

describe('BusStopTimesComponent', () => {
  let component: BusStopTimesComponent;
  let fixture: ComponentFixture<BusStopTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusStopTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusStopTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

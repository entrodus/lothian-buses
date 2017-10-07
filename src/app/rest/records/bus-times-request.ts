import { TimeRequest } from './time-request';

export class BusTimesRequest {
    key: string;
    timeRequests: TimeRequest[] = [];
    nb?: number;
    day?: number; // From 0 (present day) to 3 (day+3)
    time?: string; // Time String HH:MM (24hours format) Departure time Default value: now
}

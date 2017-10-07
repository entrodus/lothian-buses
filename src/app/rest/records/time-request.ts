export class TimeRequest {
    stopId: string;
    refService: string = 'ALL';
    refDest: string = 'ALL';
    operatorId: 'LB' | '0' = '0';

    static fromStopId(stopId: string) {
        const timeRequest = new TimeRequest();
        timeRequest.stopId = stopId;
        return timeRequest;
    }

}
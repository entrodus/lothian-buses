import { TimeData } from './time-data';

export class BusTime {
    operatorId: string;
    stopId: string;

    stopName: string; // Bus stop name
    refService: string; // Service reference
    mnemoService: string; // Service mnemonic

    refDest: string; // Destination reference when the bus is not going to be turned
    // short (timedata.type != “P”)
    nameDest: string; // Destination name when the bus is not going to be turned
    // short (timedata.type != “P”)

    timeDatas: TimeData[]; // List of bus timetables

    globalDisruption: boolean; // On-going Network disruption flag
    serviceDisruption: boolean; // On-going Service disruption flag
    busStopDisruption: boolean; // On-going Bus stop disruption flag
    serviceDiversion: boolean; // Ongoing service diversion flag
}

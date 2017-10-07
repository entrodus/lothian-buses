export class TimeData {
    Day: number; // Day of Departure From 0 (current day) to 3 (current day+3)
    Time: string; // String HH:MM (24hours format) Time of passage
    Minutes: number; // Waiting time before departure
    Reliability: string;  // Bus Time description
    // B -> Bus is delayed
    // D -> Bus is delocated
    // F -> Real time bus (not low floor equipped)
    // H -> Real time bus (low floor equipped)
    // I -> Bus is immobilized
    // N -> Bus is neutralized
    // R -> Bus with a radio fault
    // T -> Estimated time
    // V -> Service diverted

    Type: string; // Bus stop description
    // D -> Terminus Start/Stop
    // N -> Normal Stop
    // P -> Part Route
    // R -> Reference Stop

    terminus: string; // SMS number of the terminal stop To display instead of
    // the destination when the bus is going to be turned short the
    // timedata.type = “P”
    journeyId: string;
    busId: string;
    Fleet: number; // Up to 5 digits. Only filled when
    // the Timedata.reliability !=T and when a bus is allocated to this journey
}

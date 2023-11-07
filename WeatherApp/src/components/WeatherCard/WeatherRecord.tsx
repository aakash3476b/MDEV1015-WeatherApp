export class WeatherRecord {
    cityName: string;
    dateObj: Date;
    tempSnapshot: number;
    maxTemp: number;
    minTemp: number;

    constructor({cityName, timestamp, tempSnapshot, maxTemp, minTemp}: {cityName: string, timestamp: number, tempSnapshot: number, maxTemp: number, minTemp: number}) {
        this.cityName = cityName;
        this.dateObj = new Date(timestamp);
        this.tempSnapshot = tempSnapshot;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
    }

    getHourMinString(hour24Format: boolean = false): string {
        let hour;
        let min;
        let middayMarker = "";
        if (hour24Format == false) {
            let hourInt = this.dateObj.getHours();
            if (hourInt == 12) {
                middayMarker = " NN";
            }else if (hourInt > 12) {
                hourInt -= 12;
                middayMarker = " PM";
            }else {
                middayMarker = " AM";
            }
        }
        if (this.dateObj.getHours() < 10) {
            hour = "0" + this.dateObj.getHours().toString();
        }else {
            hour = this.dateObj.getHours().toString();
        }
        if (this.dateObj.getMinutes() < 10) {
            min = "0" + this.dateObj.getMinutes().toString();
        }else {
            min = this.dateObj.getMinutes().toString();
        }
        return `${hour}:${min}${middayMarker}`
    }
}
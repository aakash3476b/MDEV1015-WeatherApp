interface WeatherCardData {
    recordData: WeatherCardRecordData;
    imgPath: any;
    containerStyle: string;
}

interface WeatherCardRecordData {
    cityName: string;
    timestamp: number;
    tempSnapshot: number;
    maxTemp: number;
    minTemp: number;
}


const testData: Array<WeatherCardData> = [
    {
        recordData: {
            cityName: "Barrie",
            timestamp: (new Date("2023-02-02 09:00:00")).getTime(),
            tempSnapshot: 5,
            maxTemp: 10,
            minTemp: -10,
        },
        imgPath: require("../../../assets/images/grey-cloud.png"),
        containerStyle: "warning"
    },
    {
        recordData: {
            cityName: "Barrie",
            timestamp: (new Date("2023-02-02 12:00:00")).getTime(),
            tempSnapshot: 10,
            maxTemp: 10,
            minTemp: -10,
        },
        imgPath: require("../../../assets/images/grey-cloud.png"),
        containerStyle: "warning"
    },
    {
        recordData: {
            cityName: "Barrie",
            timestamp: (new Date("2023-02-02 22:00:00")).getTime(),
            tempSnapshot: -7,
            maxTemp: 10,
            minTemp: -10,
        },
        imgPath: require("../../../assets/images/black-cloud.png"),
        containerStyle: "danger"
    }
];
const getFavoriteData = () => {
    return testData;
}

export {getFavoriteData};
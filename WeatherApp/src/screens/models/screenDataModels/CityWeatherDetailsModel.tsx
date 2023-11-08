
const weatherItems = [
    { text: 'Now', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '1 AM', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '2 AM', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '3 AM', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '4 AM', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '5 AM', imageSource: require("../../../../assets/Scattered-showers-night.png")},
    { text: '6 AM', imageSource: require("../../../../assets/outline.png")},
    { text: '7 AM', imageSource: require("../../../../assets/outline.png")},
];

const getCityWeatherDetailsData = () => {
    return weatherItems;
}

export {getCityWeatherDetailsData};

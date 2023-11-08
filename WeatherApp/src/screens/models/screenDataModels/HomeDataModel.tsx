
const weatherItems = [
    { text: 'Now', imageSource: require("../../../../assets/outline.png")},
    { text: '5 PM', imageSource: require("../../../../assets/outline.png")},
    { text: '6 PM', imageSource: require("../../../../assets/outline.png")},
    { text: '7 PM', imageSource: require("../../../../assets/outline.png")},
    { text: '8 PM', imageSource: require("../../../../assets/outline.png")},
    { text: '9 PM', imageSource: require("../../../../assets/Clear-night.png")},
    { text: '10 PM', imageSource: require("../../../../assets/Clear-night.png")},
];


const getHomeData = () => {
    return weatherItems;
}

export {getHomeData};

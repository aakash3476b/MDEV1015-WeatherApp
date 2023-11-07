import { ScrollView, Text } from "react-native"
import { favoritePageStyles } from "../styles/styles"
import WeatherCard from "../components/WeatherCard/WeatherCard"
import { WeatherRecord } from "../components/WeatherCard/WeatherRecord"




const testData = [
    {
        recordData: {
            cityName: "Barrie",
            timestamp: (new Date("2023-02-02 09:00:00")).getTime(),
            tempSnapshot: 5,
            maxTemp: 10,
            minTemp: -10,
        },
        imgPath: require("../assets/images/grey-cloud.png"),
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
        imgPath: require("../assets/images/grey-cloud.png"),
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
        imgPath: require("../assets/images/black-cloud.png"),
        containerStyle: "danger"
    }
]

const FavoriteScreen = () => {
    return (
        <>
        <Text style={favoritePageStyles.heading}>Weather</Text>
        <ScrollView contentContainerStyle={{alignItems: 'stretch'}} style={[favoritePageStyles.favoriteScrollSize]}>

            {testData.map((item, index) => (
                <WeatherCard key={index} containerStyle={item.containerStyle} imagePath={item.imgPath} weatherRecord={new WeatherRecord(item.recordData)}></WeatherCard>
            ))}
        </ScrollView>
        </>
    )
};

export default FavoriteScreen;
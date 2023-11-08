import { ScrollView, Text } from "react-native"
import { favoritePageStyles } from "../../styles/styles"
import WeatherCard from "../../components/WeatherCard/WeatherCard"
import { WeatherRecord } from "../../components/WeatherCard/WeatherRecord"
import { getFavoriteDataFromModel } from "../controllers/screenDataControllers/FavoriteDataController"




const FavoriteScreen = () => {
    const testData = getFavoriteDataFromModel();
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
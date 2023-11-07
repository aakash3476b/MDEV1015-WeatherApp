import { Image, ImageSourcePropType, ImageStyle, Text, TextStyle, View, ViewStyle } from "react-native";
import { favoritePageStyles } from "../../styles/styles";
import { WeatherRecord } from "./WeatherRecord";


interface WeatherCardProps {
    containerStyle: string;
    imagePath: ImageSourcePropType | null;
    weatherRecord: WeatherRecord;
}
  
const WeatherCard : React.FC<WeatherCardProps> = ({containerStyle, imagePath, weatherRecord}) => {

    let mainBodyStyle: ViewStyle;
    let textStyle: TextStyle;

    switch (containerStyle) {
        case "danger":
            mainBodyStyle = favoritePageStyles.dangerContainerContainer;
            textStyle = favoritePageStyles.dangerContainerText;
            break;
        case "warning":
            mainBodyStyle = favoritePageStyles.warningContainerContainer;
            textStyle = favoritePageStyles.warningContainerText;
            break;
        default:
            return null;
    }


    return (
    <View style={[mainBodyStyle, favoritePageStyles.containerBase]}>
        { (imagePath != null) && (
            <View style={favoritePageStyles.backgroundImageContainer} >
                <Image source={imagePath} resizeMode="contain" style={favoritePageStyles.backgroundImage as ImageStyle}></Image>

            </View>)}
        <View style={favoritePageStyles.contentContainer}>
        <View style={[favoritePageStyles.upperInfo]}>
            <View style={[favoritePageStyles.spaceTimeContainer]}>
                <Text style={[textStyle, favoritePageStyles.weatherFocusText]}>{weatherRecord.cityName}</Text>
                <Text style={[textStyle]}>{weatherRecord.getHourMinString()}</Text>
            </View>
            <Text style={[textStyle,favoritePageStyles.weatherFocusText]}>
                {weatherRecord.tempSnapshot}°
            </Text>
        </View>
        <View style={[favoritePageStyles.lowerInfo]}>
                <Text style={[textStyle]}>H: {weatherRecord.maxTemp}° L: {weatherRecord.minTemp}°</Text>
        </View>
        </View>
    </View>
    );
};

export default WeatherCard;
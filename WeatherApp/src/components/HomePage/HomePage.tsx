import { SafeAreaView, View, Text, StyleSheet, Image} from "react-native"
import WeatherItem from "../CityWeatherDetails/WeatherItem";
import { getHomeDataFromModel } from "../../screens/controllers/screenDataControllers/HomeDataController";


const HomePage = () => {

    const weatherItems = getHomeDataFromModel();
    
    const {primary,topNav,box1,box2,textStyles,largeFont,mediumFont,imageStyles,imageContainer,textContainer,textContainer_3,clockIconStyles,weatherItemsContainer,thunderStyles} = styles;
    
    return(
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[primary, topNav]}>
                <Image style={{resizeMode: 'contain',width: 55, height:35,}} source={require('../../../assets/menuIcon.png')} />
                <Image style={{resizeMode: 'contain',width: 30, height:35, marginLeft:'auto'}} source={require('../../../assets/star.png')} />
            </View>
            
            <View style = {[primary, box1]}>
                <View style={textContainer}>
                    <Text style={[textStyles, mediumFont]}>Barrie</Text>
                    <Text style={textStyles}>90% Chance of Rain</Text>
                </View>

                <View style={textContainer}>
                    <Text style={textStyles}>Thunderstorm</Text>
                    <Text style={[textStyles, largeFont]}>23{'\u00b0'}C </Text>
                </View>

                <View style={imageContainer}>
                    <Image source={require('../../assets/images/grey-cloud.png')} style={imageStyles} />
                    <Image source={require('../../assets/images/jump.png')} style={[thunderStyles, {resizeMode: 'contain'}]}/>
                </View>

                <View style={textContainer_3}>
                    <Text style={textStyles}>H:33{'\u00b0'} L:23{'\u00b0'}</Text>
                </View>
                
            </View>

            <View style = {[primary, box2]}>
                <View style={{flex:0.3, marginTop:15, flexDirection:'row', alignItems:'center'}}>
                    <Image style={clockIconStyles} source={require('../../../assets/clock.png')}/>
                    <Text style={[textStyles, {color:'black'}]}>Hourly Forecast</Text>
                </View>

                <View style={weatherItemsContainer}>
                    {weatherItems.map((item, index) => (
                        <WeatherItem key={index} text={item.text} imageSource={item.imageSource} />
                    ))}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#2B2B2B", 
    },

    primary: {
        marginVertical: 8,
        marginHorizontal: 20,
    },
    
    topNav:{
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },

    textContainer: {
        flex: 0.5,
        marginTop: 20
    },

    textContainer_3: {
        alignSelf: "flex-end",
        marginRight: 30
    },

    textStyles: {
        textAlign: 'center',
        color: "black",
        fontSize: 18,
        fontWeight: 'bold'
    },

    largeFont: {
        fontSize: 96,   
    },

    mediumFont: {
        fontSize: 48,
    }, 

    imageContainer: {
        position: "relative",
        flex: 1,
        zIndex: -1,
        justifyContent: 'center',
    },

    imageStyles: {
        height: 300,
        width: 300,
        resizeMode: 'contain'
    },

    thunderStyles: {
        position: "absolute",
        left: -25,
        height: '120%',
        width: '100%'
    },

    box1: {
        borderRadius: 40,
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FAD349",
        paddingBottom: 15,
        marginTop: 15
    },

    box2: {
        borderRadius: 40,
        flex: 0.8,
        backgroundColor: "#E6E9ED",
        marginBottom: 20,
    },

    clockIconStyles: {
        resizeMode: 'contain', 
        width: 40,
        height: 35, 
        marginLeft: 20,
        marginRight: 10
    },

    weatherItemsContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 8
    },
})
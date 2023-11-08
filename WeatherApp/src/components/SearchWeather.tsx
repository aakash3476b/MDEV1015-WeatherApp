import React, { useEffect, useState, Component } from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet, Image, TouchableOpacity, Text, Platform } from 'react-native'
import { favoritePageStyles } from "../styles/styles"
import WeatherCard from "../components/WeatherCard/WeatherCard"
import { WeatherRecord } from "../components/WeatherCard/WeatherRecord"
import { getSearchData } from '../screens/models/screenDataModels/SearchDataModel';


const SearchWeather = () => {
    const { primary, topNav, horizontalContainer } = styles;

    return (
        <SafeAreaView style={styles.wrapper}>
           
            <View style={styles.horizontalContainer}>
                <TouchableOpacity>
                    <View style={styles.curvyBox} >
                        <Text style={styles.dropdownText}>Canada</Text>
                        <Image source={require('../../assets/drop_down_arrow.png')} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.curvyBox} >
                        <Text style={styles.dropdownText}>Ontario</Text>
                        <Image source={require('../../assets/drop_down_arrow.png')} />
                    </View>
                </TouchableOpacity>



                <View style={styles.searchIcon}>
                    <TouchableOpacity >
                        <Image source={require('../../assets/search_city.png')} />
                    </TouchableOpacity>
                </View>


            </View>

            <ScrollView contentContainerStyle={{ alignItems: 'stretch' }}
                style={[favoritePageStyles.favoriteScrollSize]}>

                {testData.map((item, index) => (
                    <WeatherCard key={index} containerStyle={item.containerStyle} imagePath={item.imgPath}
                        weatherRecord={new WeatherRecord(item.recordData)}></WeatherCard>
                ))}
            </ScrollView>


        </SafeAreaView>
    )
}


const testData = getSearchData();


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

    topNav: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },
    horizontalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
    },
    curvyBox: {
        width: 120,
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 14,
        marginHorizontal: 5,
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row',

    },

    label: {
        fontSize: 18,
        marginBottom: 10,
    },

    dropdownText: {
        fontSize: 16,
    },
    searchIcon: {
        flex: 1,
        alignItems: 'flex-end',
        marginHorizontal: 20
    },
})

export default SearchWeather
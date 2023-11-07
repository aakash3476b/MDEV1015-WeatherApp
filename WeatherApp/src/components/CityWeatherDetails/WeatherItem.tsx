import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface WeatherItemProps {
  text: string;
  imageSource: any; 
}

const WeatherItem: React.FC<WeatherItemProps> = ({ text, imageSource }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>{text}</Text>
      <Image source={imageSource} style={styles.imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 5,
  },
  imageStyles: {
    resizeMode: 'contain',
    width: 40,
    height: 35,
  },
});

export default WeatherItem;

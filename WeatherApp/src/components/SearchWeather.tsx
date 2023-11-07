import { SafeAreaView, View, StyleSheet } from "react-native"

const SearchWeather = ()=> {
    return (
        
      <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexbox1} />
        <View style={styles.flexbox2}>
          <View style={styles.topFlexbox} />
          <View style={styles.bottomContainer}>
            <View style={styles.innerFlexbox1} />
            <View style={styles.innerFlexbox2} />
          </View>
        </View>
      </View>
    </View>
            
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  flexbox1: {
    flex: 0.4,
    backgroundColor: 'black',
  },
  flexbox2: {
    flex: 0.6,
    backgroundColor: 'gray',
    paddingVertical: 10,
  },
  topFlexbox: {
    flex: 1,
    backgroundColor: 'blue',
    marginBottom: 275,
    borderRadius: 10,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerFlexbox1: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 1,
    borderRadius: 10,
  },
  innerFlexbox2: {
    flex: 1,
    backgroundColor: 'blue',
    marginTop: 5,
    borderRadius: 10,
    marginBottom: 30,
  },
    
})

export default SearchWeather
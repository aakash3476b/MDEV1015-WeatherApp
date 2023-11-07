import { SafeAreaView, View, StyleSheet } from "react-native"

const Contact = ()=> {
    return (
        
        <View style={styles.container}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            {/* Content for the first flexbox */}
          </View>
        </View>
        <View style={styles.spacing} />
        <View style={styles.smallContainer}>
          <View style={styles.smallInnerContainer}>
            <View style={styles.row}>
              <View style={styles.box} />
              <View style={styles.box} />
              <View style={styles.box} />
              <View style={styles.box} />
            </View>
          </View>
        </View>
      </View>
            
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
      },
      outerContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      innerContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
      },
      spacing: {
        height: 10,
      },
      smallContainer: {
        height: 100,
        justifyContent: 'center',
      },
      smallInnerContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding:12,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      box: {
        width: 75,
        height: 75,
        backgroundColor: 'black',
      },
    
})

export default Contact
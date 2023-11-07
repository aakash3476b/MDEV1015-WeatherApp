import { SafeAreaView, View, Text, StyleSheet } from "react-native"

const SettingsPage = ()=> {
    return (
        <SafeAreaView style = {styles.wrapper}>
            <View style = {[styles.primary, styles.box1]}>
               <View style = {styles.box1_1}/>
               <View style = {styles.box1_2}/>
            </View>
            <View style = {[styles.primary, styles.box2]}>
                <View style = {styles.box2_1}/>
               <View style = {styles.box2_2}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column'
    },
    primary: {
        padding: 15
    },
    box1: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    box1_1: {
        width: 40,
        height: 40,
        marginTop: 5,
        backgroundColor: 'red',
        alignSelf: 'flex-end'
    },
    box1_2: {
        flex: 0.5,
        marginTop: 5,
        backgroundColor: 'red'
    },
    box2: {
        flex: 2,
        justifyContent: 'flex-end'
    },
    box2_1: {
        height: 80,
        marginTop: 5,
        backgroundColor: 'red'
    },
    box2_2: {
        height: 40,
        marginTop: 5,
        backgroundColor: 'red'
    }
})

export default SettingsPage
import { StyleSheet } from "react-native";
import { DARK_COLORS } from "./Colors";


export const favoritePageStyles = StyleSheet.create({
    warningContainerContainer: {
        backgroundColor: DARK_COLORS.PRIMARY_COLOR
    },
    warningContainerText: {
        color: DARK_COLORS.PRIMARY_TEXT_COLOR,
        fontWeight: "bold"
    },
    dangerContainerContainer: {
        backgroundColor: DARK_COLORS.SECONDARY_COLOR
    },
    dangerContainerText: {
        color: DARK_COLORS.TERTIARY_TEXT_COLOR,
        fontWeight: "bold"
    },
    containerBase: {
        position: 'relative',
        borderRadius: 25,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 20,
        flex: 1,
        flexBasis: 200,
        justifyContent: "center"
    },
    favoriteScrollSize: {
        flexGrow: 1,
        padding: 3,
        backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR,
    },
    infoContainer: {
        flexDirection: "column",
        paddingLeft: 10,
        paddingRight: 5,
        alignItems: "center"
    },
    upperInfo: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    spaceTimeContainer: {
        flexDirection: "column"
    },
    lowerInfo: {
        flex: 1,
        alignItems: "flex-end"
    },
    backgroundImageContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: "50%",
        width: '100%',
        height: '100%',
    },
    weatherFocusText: {
        fontSize: 32,
    },
    heading: {
        fontSize: 32,
        padding: 30,
        fontWeight: "bold",
        color: DARK_COLORS.TERTIARY_TEXT_COLOR
    },
    backgroundImage: {
        flex: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    contentContainer: {
        flex: 1,
    },
});
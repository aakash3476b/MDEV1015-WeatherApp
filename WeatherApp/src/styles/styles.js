import { StyleSheet } from "react-native";
import { DARK_COLORS, GRAY } from "./Colors";


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
        color: DARK_COLORS.PRIMARY_TEXT_COLOR,
        backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR
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

export const signUpPageStyles = StyleSheet.create({
    mainBody: {
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        width: "100%",
        backgroundColor: DARK_COLORS.PRIMARY_BACKGROUND_COLOR
    },
    headerImageView: {
        flex: 1,
        flexShrink: 1
    },
    headerImage: {
        flex: 2,
    },
    headerView: {
    },
    header: {
        flexBasis: 50,
        flexShrink: 1,
        color: DARK_COLORS.TERTIARY_TEXT_COLOR,
        fontSize: 32,
    },
    inputView: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    inputTextField: {
        borderWidth: 3,
        borderRadius: 10,
        color: GRAY.s600,
        width: "80%",
        padding: 10,
        fontSize: 24,
        margin:5
    },
    signUpButton: {
        backgroundColor: DARK_COLORS.PRIMARY_COLOR,
        color: DARK_COLORS.PRIMARY_TEXT_COLOR,
        borderWidth: 3,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexShrink: 1,
        maxWidth: '90%',
    },
    signUpButtonText: {
        fontSize: 24
    },
    buttonView: {
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        padding: 10
    },
    signUpButtonView: {
        maxWidth: '90%',
        alignItems: 'center',
    },
    loginText: {
        color: DARK_COLORS.TERTIARY_TEXT_COLOR
    },
    loginAnchorText: {
        color: DARK_COLORS.PRIMARY_COLOR,
        alignSelf: 'center'
    },
    loginOpacityComponent: {
        textAlignVertical: "center"
    },
    loginView: {
        justifyContent: "center",
        alignItems: "center"
    }
})
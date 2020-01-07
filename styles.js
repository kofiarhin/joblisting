import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        fontFamily: "firaReular"
    },
    textLarge: {
        fontSize: 30,
        fontWeight: "900"
    },
    textSmall: {
        fontSize: 15
    },

    textBold: {
        fontFamily: "firaBold"
    },
    headerWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20
    },

    categories: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    category: {
        marginRight: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    cover: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
        marginBottom: 20
    },
    listDetails: {
        flexDirection: "row",
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10
    }


})

export default styles;
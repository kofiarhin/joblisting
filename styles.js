import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        fontFamily: "firaReular",
        marginBottom: 10
    },
    textLarge: {
        fontSize: 30,
        fontWeight: "900"
    },
    textSmall: {
        fontSize: 18
    },

    textBold: {
        fontFamily: "firaBold"
    },
    textMedium: {
        fontSize: 18
    },
    textPara: {
        lineHeight: 22
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
    },
    mainCover: {
        flex: 1,
        position: "relative",
        zIndex: 1000
    },
    listUnitCover: {
        width: "100%",
        height: 400,
        marginBottom: 20
    },
    coverIconWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        position: "absolute",
        zIndex: 2000,
        top: 20,
        left: 0,
        right: 0
    },
    iconWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        padding: 20

    },
    darkIcon: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25
    },

    applyBtn: {

        backgroundColor: "#3FDE5F",
        paddingVertical: 20,
        textAlign: "center",
        position: "absolute",
        top: "80%",
        left: "50%",
        translateX: -140,
        width: 300,
        borderRadius: 50
    },
    btnText: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    }



})

export default styles;
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        marginTop: 8
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 8
    },
    name: {
        color: "slategray",
        fontSize: 16
    },
    price: {
        color: "slategray",
        fontWeight: "bold",
        fontSize: 18
    }


})
import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
var width = Dimensions.get("window").width;
export default StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'column',
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    viewAll: {
        height: 25,
        flexDirection: 'row'
    },
    durationLeft: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: width / 3 + 10
    },
    durationRight: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: width / 3 + 15
    },
    progress: {
        height: 0.9,
        width: width * 9 / 10,
        backgroundColor: 'gray'
    }


})
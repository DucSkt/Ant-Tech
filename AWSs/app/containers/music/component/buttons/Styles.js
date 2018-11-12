import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
var width = Dimensions.get("window").width;
export default StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row'
        , alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 25,
        width: 25,
        marginLeft: 30
    },

})
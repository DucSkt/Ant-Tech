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
    durationLeft:{ 
        marginLeft: (width - (width * 9 / 10))/3}
    ,
    durationRight: { 
        marginRight: (width - (width * 9 / 10))/3
    },
    progress: {
        alignSelf:'center',
        height: 0.9,
        width: width * 9 / 10,
        backgroundColor: 'gray'
    }


})
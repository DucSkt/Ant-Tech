import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';
var width = Dimensions.get("window").width;
export default StyleSheet.create({
    container: { 
        flex: 1, 
        flexDirection: 'column',
         justifyContent: 'center', 
         alignItems: 'center' 
    },
    image:{
        height:280,
        width: width*4/5
    },
    textTitle1:{ 
        width: width*3/5,
        textAlign:'center',
        marginTop:5,
         fontSize:15, 
         color:'black'
        },
    textTitle2:{
        textAlign:'center',
        marginTop:10 ,
         fontSize:12, 
         color:'gray'
    },
 
            
})
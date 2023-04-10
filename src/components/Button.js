import React from "react";
import { StyleSheet } from "react-native";
import { View,TouchableOpacity,Text } from "react-native";


function Buttons({text,onPress}){
    return(
        <View style={styles.constainer}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Buttons;

const styles=StyleSheet.create({
    constainer:{
        flex:1 ,
        alignItems:'center',
        justifyContent:'center'    
    },
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff',
        width:63,
        height:35,
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:20
        },
        shadowOpacity:0.29,
        shadowRadius:10,
        elevation:10
    },
    buttonText:{
        fontWeight:'bold',
        color:'gray',
        fontSize:15
    }
})
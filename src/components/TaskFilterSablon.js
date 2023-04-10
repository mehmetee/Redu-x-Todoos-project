import React from "react";
import { View,Text, StyleSheet,Image,} from "react-native";

function TaskFilterSablon({item,thema}){
    return(
        <View style={base_styles.container}>
            <View style={base_styles.innerContainer}>
               
                    <View style={[base_styles.bodyContainer,thema==='succsses'?succsses.butoonTik :failed.longButtonClick] } >
                        { thema==='succsses'? 
                        <>
                            <View style={succsses.imageContainer} >
                                <Image 
                                source={require('../image/tick.png')}
                                style={succsses.image}
                                />
                            </View>
                        </>
                        :
                        <>
                            <View style={failed.imageContainer}>
                                <Image 
                                source={require('../image/cikarma.png')}
                                style={failed.image}
                                />
                            </View>
                        </> 
                        }   
                        <Text style={[thema==='succsses'?succsses.text:failed.text]}>{item}</Text>
                    </View>

                
            </View>
        </View>
    )
}
export default TaskFilterSablon;

const base_styles=StyleSheet.create({
    container:{
        flex:1,
        marginBottom:8,
        paddingBottom:8,
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
        
    },
    bodyContainer:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        top:4,
        padding:5,
    },
})


 const failed =StyleSheet.create({
        ...base_styles,
        text:{
            color:'gray',
            flex:1,
            marginLeft:9,
            fontSize:18,
            textDecorationLine:'line-through',
            alignSelf:'center'
    
        },
        longButtonClick:{
            flexDirection:'row',
            flex:1,
            backgroundColor:'#ff5e5e',
            opacity:0.15,
            borderRadius:20, 
        },
       
        image:{
            resizeMode:'contain',
            alignSelf:'center',
            tintColor:'red',
            height:30,
            width:30,
            borderWidth:3,
    },
    imageContainer:{
        flexDirection:'row',
        height:25,
        borderWidth:1,
        padding:7,
        borderRadius:30,
        marginLeft:5,
        flex:0.030,
        justifyContent:'center',
        borderColor:'red'
    },
    })

 const succsses=StyleSheet.create({
        ...base_styles,
        butoonTik:{
            flex:1,
            opacity:0.3,
            borderRadius:20,
            backgroundColor:'#adffad',
            
        },
        image:{
            width:18,
            height:18,
            resizeMode:'contain',
            alignSelf:'center',
            tintColor:'#05a80d'
        },
        imageContainer:{
            flexDirection:'row',
            height:25,
            borderWidth:1,
            padding:7,
            borderRadius:30,
            marginLeft:5,
            flex:0.030,
            justifyContent:'center',
            borderColor:'green',
        },
        text:{
            flex:1,
            marginLeft:9,
            color:'gray',
            fontSize:18,
        },
    })



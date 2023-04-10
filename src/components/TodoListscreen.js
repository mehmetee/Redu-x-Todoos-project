import React from "react";
import { View,Text, StyleSheet, TouchableOpacity ,Image } from "react-native";
import { useDispatch } from "react-redux";

function ScreenNotes({item}){
    const [visible,setVisible]=React.useState(false)
    const [longClick,setLongClick]=React.useState(false)
    const dispatch=useDispatch()
    
    const onLongClick = () => {
       setLongClick(!longClick)
       if (longClick==false) {
           dispatch({type:'FAILEDTASK',pyload:{failede:item}})
       }else{
        dispatch({type:'UNDO',pyload:{failede:item}})
       }
        }

    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
            {
                item ?               
               (
                <>
                   <TouchableOpacity
                        onLongPress={()=>{ 
                            if(visible==true){
                                setLongClick(false)
                            }else{
                                onLongClick()
                            }
                        }}
                        style={[longClick ?[ styles.longButtonClick]:styles.textButton,
                            !visible ?styles.textButton :styles.butoonTik ]}
                    >
                 <TouchableOpacity style={[
                    longClick ? [styles.button,{borderColor:'red'} ]
                    :[styles.button,{borderColor:'#c5c5c5'}],
                    !visible ?styles.button : 
                    [styles.button,{borderColor:'green'}]
                ]} 
                disabled={longClick}
                onPress={()=>{
                    setVisible(!visible)
                    if (visible==false) {
                        dispatch({type:'COMPLETED',pyload:{complet:item}})
                        
                    }else{
                        dispatch({type:'COMPLETUNDO',pyload:{complet:item}})
                    }
                }}
                >
                    {!longClick ?(visible &&
                        <Image 
                        source={require('../image/tick.png')}
                        style={[styles.image,{tintColor:'#05a80d'}]}
                        />)
                        : 
                        <Image 
                        source={require('../image/cikarma.png')}
                        style={[styles.image,{tintColor:'red',height:30,width:30,borderWidth:3}]}
                        />
                    }
                    </TouchableOpacity>

                 
                    <Text style={ [ !longClick ? styles.textt :styles.textLong,!visible ?styles.textt : [styles.textt,{marginLeft:9}]]}>{item}</Text>
                    </TouchableOpacity>

                    </>
                    ): null   }
             
            </View>
        </View>
    )
}
export default ScreenNotes;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginBottom:8,
        backgroundColor:'#fafafa',
        paddingBottom:8,
        borderBottomLeftRadius:30,
        borderTopLeftRadius:30
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
        
    },
    image:{
        width:18,
        height:18,
        resizeMode:'contain',
        alignSelf:'center'
    },
    button:{
        height:25,
        borderWidth:1,
        padding:7,
        borderRadius:30,
        marginLeft:10,
        flex:0.030,
        justifyContent:'center'
    },
    textt:{
        flex:1,
        marginLeft:9,
        color:'gray',
        fontSize:18,
    },
    textLong:{
        color:'gray',
        flex:1,
        marginLeft:9,
        fontSize:18,
        textDecorationLine:'line-through'

    },
    textButton:{
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        top:3,
        padding:2
    },
    longButtonClick:{
        flexDirection:'row',
        flex:1,
        padding:2,
        backgroundColor:'#ff5e5e',
        opacity:0.15,
        borderTopLeftRadius:20, 
        borderBottomLeftRadius:20, 
    },
    butoonTik:{
        flexDirection:'row',
        flex:1,
        padding:2,
        backgroundColor:'#adffad',
        opacity:0.3,
        borderTopLeftRadius:20, 
        borderBottomLeftRadius:20, 
        
    }
})
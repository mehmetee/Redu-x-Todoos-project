import React from "react";
import { View,StyleSheet,Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TodoListcreen from '../components/TodoListscreen'
import  {SwipeListView} from 'react-native-swipe-list-view';
import { TouchableOpacity } from "react-native";


function ScreenNotes(){
    const select=useSelector((dataa)=>dataa.todooList)
    const dispatch =useDispatch();
    const RequirementsBar=({barPercentage})=>{
        return(
            <View style={styles.sperator}>
              
                {/*Bar */}
                <View style={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    width:'100%',
                    height:3,
                    backgroundColor:"gray"
                }}>
    
                </View>
                <View style={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    width:barPercentage,
                    height:3,
                    backgroundColor:'white'
                }}>
    
                </View>
            </View>
        )
    }
    const  ItemSeparatorComponent=()=>{
        return(
            <View style={{borderBottomWidth:2,borderBottomColor:'#f5f5f5',marginBottom:8}}></View>
        )
    }
    
    return(
        <View style={styles.container}>
                <Text style={styles.header} >TOD
                    <Text style={{color:'white'}}>OOS</Text>
                </Text>
                    <RequirementsBar 
                    barPercentage={'50%'}
                    />
            <View style={styles.bodyContainer}>
    
                <View style={styles.innerContainer}>
                    <Text style={styles.headerNoteText}>GÖREVLER</Text>
                    <SwipeListView 
                   closeOnRowPress
                    data={select}
                    renderItem={({item})=>(<TodoListcreen  item={item}/>)}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                    keyExtractor={(item) => item}
                                        
                    renderHiddenItem={({item,index})=>(
                        <View style={styles.swipeContainer}>
                            <TouchableOpacity style={styles.delButton}
                            onPress={()=> dispatch({type:'DELETEDLIST',pyload:{name:item}})}
                            >
                                <Image 
                                source={require('../image/geridonusum.png')}
                                style={styles.copImage}
                                />
                            </TouchableOpacity>
                         
                        </View>
                    )}
                    rightOpenValue={-75}
                    stopRightSwipe={-75}
                    
                    />
                </View>
            </View>
        </View>
    )
}
export default ScreenNotes;

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#d5d5d5',
        flex:1,

    },
    bodyContainer:{
        flex:1,
        backgroundColor:'white',
        width:'95%',
        alignSelf:'center',
        marginTop:15,
        marginBottom:15,
        borderRadius:5
    },
    header:{
        fontSize:50,
        textAlign:'center',
        marginTop:10,
        color:'gray',
    },
    innerContainer:{
        flex:1,
        marginTop:16
    },
    headerNoteText:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#c5c5c5',
        marginBottom:10
    },
    swipeContainer:{
        flex:0.75,
        alignItems:'center',
        justifyContent:'space-between',
        padding:5,
    },
    delButton:{
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width:75,
        right:0,
        backgroundColor:'#d5d5d5'
    },
    copImage:{
        width:30,
        height:30,
        resizeMode:'contain',
        alignSelf:'center',
        tintColor:'black'
    }
  

})

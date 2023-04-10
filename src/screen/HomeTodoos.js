import React,{useState} from "react";
import {  StyleSheet, TouchableOpacity, Alert,Keyboard } from "react-native";
import { View,Text, TextInput,} from "react-native";
import { useDispatch, useSelector} from "react-redux";
import Buttons from "../components/Button";
import TaskFilter from "./TaskFilter";

function Primary(){
    const [text,setText]=React.useState('')         
    const [stil,setStil]=React.useState('')      
    //Redux State management
    const dispatch=useDispatch()
    const globalList=useSelector(selet=>selet.todooList)
    const selectFailed=useSelector(selet=>selet.failedTask)
    const selectCompleted=useSelector(selet=>selet.completed)
    
    //Redux State
    const [shownFailed,setShownFailed]=useState(false)
    const [shownSuccsses,setShownSuccsses]=useState(false)
    const [shownClear,setShownClear]=useState(false)


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
 

    const handleAdd=()=>{
        dispatch({type:'ADD_LIST',pyload:{name:text}})
           setText('');
           Keyboard.dismiss()           
    }
 
    return(
        <View style={styles.continer}>
            <Text style={styles.header} >TOD
                <Text style={{color:'white'}}>OOS</Text>
            </Text>
            <RequirementsBar 
                barPercentage={'50%'}
            />
            <View style={styles.Body}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="What needs to be done?"
                        value={text}
                        onChangeText={setText}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.inputButton}
                    onPress={()=>{
                        if(text==''){
                            Alert.alert('Uyarı','Boş metin girilemez')
                            return
                        }else{
                                handleAdd()                       
                        }
                    }} 
                    >
                        <Text style={styles.inputButtonText}>Ekle</Text>
                    </TouchableOpacity>
                </View>
            
            <View style={styles.buttonsContainer}>
                <Text style={styles.listLength}>{globalList.length} task </Text>
                <Buttons text={'Failed'} onPress={()=>{setShownFailed(!shownFailed)
                    setShownClear(false)
                    setShownSuccsses(false)
                    setStil('failed')
                    
                }} />
                <Buttons text={'Succs'}  onPress={()=>{setShownSuccsses(!shownSuccsses)
                    setShownFailed(false)
                    setShownClear(false)
                    setStil('succsses')
                   
                }}/>
                <Buttons text={'clear'}  onPress={()=>{setShownClear(!shownClear)
                        setShownFailed(false)
                        setShownSuccsses(false)
                 
                }}/>
            </View>
            <View style={{flex:0.92}}>
                {shownFailed 
                ? <TaskFilter item={selectFailed} stil={stil}/>
                :null
                }
                 {shownSuccsses 
                ? <TaskFilter item={selectCompleted} stil={stil}/>
                :null
                 }
            </View>
          </View>

        </View>
    )
}
export default Primary;

const styles=StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'#d5d5d5',
       justifyContent:'center'
    },
    header:{
        fontSize:50,
        textAlign:'center',
        marginTop:10,
        color:'gray',
    },
   Body:{
    flex:1,
    backgroundColor:'white',
    width:'95%',
    alignSelf:'center',
    marginTop:15,
    marginBottom:15,
    borderRadius:5
    
   },
   inputContainer:{
    alignItems:'center',
    marginLeft:8,
    marginRight:8,
    marginTop:15,
    marginBottom:25,
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#d5d5d5',
    borderRadius:6
    
   },
   input:{
    flex:1,
    backgroundColor:'#f9f9f9',
    paddingLeft:8,
    marginRight:5,
    height:50,
    borderRadius:10,
    shadowColor:'black',
    shadowOffset:{width:10,height:10},
    shadowOpacity:0.29,
    shadowRadius:5,
    elevation:5
   },
   inputButton:{
    flex:0.27,
    alignItems:'center',
    backgroundColor:'#f1f1f1',
    height:48,
    justifyContent:'center',
    borderRadius:9,
    marginLeft:5,
    shadowColor:'black',
    shadowOffset:{width:0,height:10},
    shadowOpacity:0.29,
    shadowRadius:10,
    elevation:7
   },
   inputButtonText:{
    color:'gray',
    fontWeight:'bold',
    fontSize:16

   },
   buttonsContainer:{
    flexDirection:'row',
    height:70,
    backgroundColor:'#f1f1f1',
    padding:3,
    borderRadius:15,
    marginLeft:8,
    marginRight:8
   },
   listLength:{
    textAlign:'center',
    justifyContent:'center',
    alignSelf:'center',
    flex:0.7
   }
})





  {/* 

  {shownFailed 
                ? <TaskFilter item={globalList}/>
                :null
                }

*/}
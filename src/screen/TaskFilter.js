import React from "react";
import { View,FlatList, } from "react-native";
import TaskFilterSablon from '../components/TaskFilterSablon'
import { StyleSheet } from "react-native";

function TaskFilter({item,stil}){
    const  ItemSeparatorComponent=()=>{
        return(
            <View style={styles.sperator}></View>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
            data={item}
            renderItem={({item})=><TaskFilterSablon item={item} thema={stil}/>}
            keyExtractor={(x,item)=>item.toString()}
            ItemSeparatorComponent={ ItemSeparatorComponent}
            />
        </View>
    )
}

export default TaskFilter;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginLeft:8,
        marginRight:8,
        top:30
    },
    sperator:{
        borderBottomWidth:2,
        borderBottomColor:'#f5f5f5',
        marginBottom:8
    },
})
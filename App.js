import ScreenNotes from './src/screen/ScreenNotes'
import HomeTodo from './src/screen/HomeTodoos';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab =createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarInactiveBackgroundColor:'#d5d5d5',
        tabBarActiveBackgroundColor:'gray',
        tabBarLabel:()=>{false},
        tabBarHideOnKeyboard:true
    }
    }>
        <Tab.Screen name='Home' component={HomeTodo} options={{
          tabBarIcon:()=>(<Icon name='note-edit' size={40} color={'white'} />)         
        }}/>
        <Tab.Screen name='Notes' component={ScreenNotes} 
        options={{
          tabBarIcon:()=>(<Icon name='note-text-outline' size={40} color={'white'}/>)
        }}
        />
      </Tab.Navigator>
      </NavigationContainer>
  );
}




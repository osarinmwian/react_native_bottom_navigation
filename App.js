
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome  from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';




// const Tab =  createBottomTabNavigator();

const Tab =  createMaterialTopTabNavigator ()
// create top navigation

// const Tab =  createMaterialBottomTabNavigator ();
//   createMaterialBottomTabNavigator to display bottom tab background color

 function App() {
  return (
   <NavigationContainer>
       <Tab.Navigator 
       screenOptions={({route})=>({
         tabBarIcon:({focused, size, color})=>{
           let iconName;
           if(route.name === "screenA"){
             iconName ="home";
            //  size= focused? 25: 20;
            //  color= focused? '#f0f':'#555'
               }
               else if (route.name === "screenB"){
                  iconName ="cog";
                  // size= focused? 25: 20;
                  // color= focused? '#f0f':'#555'
              }
            //  return (
            //    <FontAwesome
            //    name={iconName}
            //    size={size}
            //    color={color}/>
            //  )
             
         }
         
       })}
       //to add shadow background
       tabBarOptions={{
         activeTintColor:'#f0f',
         inactiveTintColor:'#555',
         activeBackgroundColor:'#fff',
         inactiveBackgroundColor:'#999',
         showLabel:true,
         labelStyle:{fontSize:14},
         showIcon: true
  
       }}
       // change material bottom background color
        activeColor='#f0edf6'
        inactiveColor='#3e2465'
        barStyle={{backgroundColor:"#3e2465"}}


       >
         
         
         <Tab.Screen
         name='screenA'
         component={ScreenA}
         // to add badge sign
        //  options={{tabBarBadge: 3}}
         />
         
         <Tab.Screen
         name='screenB'
         component={ScreenB}/>
       </Tab.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;

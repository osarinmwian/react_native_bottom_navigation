import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'


function ScreenA ({navigation}){
  const onPressHandler =()=>{
    navigation.navigate("screenB")
 }
  return (
    <View style={styles.container}>
   <Text style={styles.text}>
     screen A
   </Text>
   <Pressable
   onPress={onPressHandler}
   style={({pressed}) =>({backgroundColor: pressed? "#dd" : "#0f0" })}>
      <Text style={styles.text}>
     Go to screen B
   </Text>
     
   </Pressable>
 </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
    fontWeight:"bold",
    margin:10
  }
});

export default ScreenA
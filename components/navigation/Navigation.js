import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../app'
import SignIn from '../../app/signin'
import Signup from '../../app/Signup'
import Email from '../../app/Email'


const Navigation = () => {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home}>
      </Stack.Screen>
      <Stack.Screen name="signin" component={SignIn}></Stack.Screen>
      <Stack.Screen name="signup" component={Signup}></Stack.Screen>
      <Stack.Screen name="reset-password-email" component={Email}/>

      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Navigation
import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, ScreenHeaderBtn } from '../components'
import CustomButton from '../components/customButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, icons, images } from '../constants'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const ResetPassword = () => {
  const {height}=useWindowDimensions()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigation=useNavigation()
  const handleReset = () => {
   navigation.navigate('home')
  }

  const handleForgotPassword = () => {
  console.warn('forgot password')
  }
const router=useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerTitle: "",
        headerBackVisible: false,
        headerLeft: () => {
          return (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          );
        },
      }}
    />
    <ScrollView showsVerticalScrollIndicator={false}>

    <View style={styles.root}>
      <View style={[styles.sub_root,{height:height*0.3}]} >
          <Image source={images.logo} resizeMode='contain' style={[styles.logo, { height: height * 0.3 }]} />
          <Text style={styles.logo_text}>Enter code sent to your email</Text>
      </View>

   
      <CustomInput  value={username} setValue={setUsername} placeholder="password" icon="icon" secureTextEntry={true} />
      <CustomInput  value={username} setValue={setUsername} placeholder="Confirm password" icon="icon" secureTextEntry={true} />
      
        <CustomButton text="Reset" onPress={handleReset} />
        
        

      
    </View>
      </ScrollView>
      </SafeAreaView>

  )
}

  const styles = StyleSheet.create({

  root: {
      alignItems: 'center',
      padding: 20
  
    },
    sub_root: {
      width: "100%",
      alignItems: 'center',
     
    },
    logo: {
      width: "30%",
      maxWidth: "200px",
      maxHeight:100
    },
    logo_text: {
      fontSize: 18,
      fontWeight:"700"
    }
})

export default ResetPassword
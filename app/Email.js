import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomInput, ScreenHeaderBtn } from '../components'
import CustomButton from '../components/customButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, icons, images } from '../constants'
import { Stack, useNavigation, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Email = () => {
  const router = useRouter()
  const navigation=useNavigation()
  const {height}=useWindowDimensions()
  const [username, setUsername] = useState("")
  const [password,setPassword]=useState("")
  const handleNext = () => {
  navigation.navigate('Code')
  }

  const handleForgotPassword = () => {
  console.warn('forgot password')
  }
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
          <Text style={styles.logo_text}>Reset password</Text>
      </View>

   
      <CustomInput type="email" value={username} setValue={setUsername} placeholder="Username or email" icon="icon" />
      
        <CustomButton text="Submit" onPress={handleNext} />
        

      
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

export default Email
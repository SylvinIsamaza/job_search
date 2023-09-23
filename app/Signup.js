import { View, Text, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { CustomInput } from '../components'
import CustomButton from '../components/customButton/CustomButton'
import { ScrollView } from 'react-native-gesture-handler'
import { images } from '../constants'

const Signup = () => {
  const {height}=useWindowDimensions()
  const [username, setUsername] = useState("")
  const [password,setPassword]=useState("")
  const handleLogin = () => {
    console.log('login')
  }

  const handleForgotPassword = () => {
  console.warn('forgot password')
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <View style={[styles.sub_root,{height:height*0.3}]} >
          <Image source={images.logo} resizeMode='contain' style={[styles.logo, { height: height * 0.3 }]} />
          <Text style={styles.logo_text}>Signup</Text>
      </View>

   
        <CustomInput value={username} setValue={setUsername} placeholder="usename" icon="icon" />
      <CustomInput  value={username} setValue={setUsername} placeholder="Email" icon="icon" />
        
        <CustomInput value={password} setValue={setPassword} placeholder="Password" secureTextEntry={true} />
        <CustomInput value={password} setValue={setPassword} placeholder="Confirm password" secureTextEntry={true}/>
      <CustomButton text="Login" onPress={handleLogin} />
        <Text style={styles.text}>
          By Registering,You confirm that you accept our <Text style={styles.link}> Terms of Service</Text> {' '} and<Text style={styles.link}>Privacy policy</Text>
     </Text>
      <CustomButton text="Sign up with Facebook" onPress={handleLogin} bgColor="#E7EAF4" fgColor="#4765A9" icon="icon" />
      <CustomButton text="Sign up with Google" onPress={handleLogin} bgColor="#FAE9EA" fgColor="#DD4D44"  icon="icon" />
      <CustomButton text="Already have account? login" type='TERTIARY' onPress={handleForgotPassword} />

      
    </View>
    </ScrollView>

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
    },
    text: {
      color: 'gray',
      marginVertical: 10,
    },
    link: {
      color:'orange'
    }
})
export default Signup
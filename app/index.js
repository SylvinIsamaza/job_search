import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, FONT, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import SignIn from "./signin";
import Signup from "./Signup";
import Landing from "../components/common/landing/Landing";
import Email from "./Email";
import Code from "./Code";
import ResetPassword from "./ResetPassword";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "../components/navigation/Navigation";
const Home = () => {
  const isLoggedIn = false;
  const router = useRouter();
  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerTitle: "",
          
        }}
      />
      {/* <Landing /> */}
      <SignIn/>
      {/* <Signup /> */}
      {/* <Email/> */}
      {/* <Code/> */}
      {/* <ResetPassword /> */}
      {/* <Navigation/> */}
      
      </SafeAreaView>
     
  );

};
export default Home;

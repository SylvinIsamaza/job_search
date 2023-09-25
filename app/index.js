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
import { createDrawerNavigator } from "@react-navigation/drawer";
import Drawer from "../components/Drawer";
import { Provider } from "react-redux";
import store from "../redux/store";


const Home = () => {

  return (

    <Provider store={store}>
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
          headerShown:false
        }}
      />
      {/* <Landing /> */}
      <Drawer />
      {/* <SignIn/> */}
      {/* <Signup /> */}
      {/* <Email/> */}
      {/* <Code/> */}
      {/* <ResetPassword /> */}
      {/* <Navigation/> */}
    </SafeAreaView>
    </Provider>

  );
};
export default Home;

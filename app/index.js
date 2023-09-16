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
import Landing from "../components/common/landing/Landing";
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
<Landing/>
    </SafeAreaView>
  );

};
export default Home;

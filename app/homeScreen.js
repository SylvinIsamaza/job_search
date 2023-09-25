import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import { Stack, router, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, FONT, icons, images, SIZES } from "../constants";

import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import Drawer from "../components/Drawer";
const HomeScreen = ({ navigation }) => {
  const isLoggedIn = true;

  return (
<Drawer/>


  );
};

export default HomeScreen;

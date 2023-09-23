import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { CustomInput, ScreenHeaderBtn } from "../components";
import CustomButton from "../components/customButton/CustomButton";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, icons, images } from "../constants";
import { Stack, useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const navigate = useNavigation();
  const router = useRouter();
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("login");
  };

  const handleForgotPassword = () => {
    navigate.navigate("Email");
  };
  const handleCreateAccount = () => {
    navigate.navigate("Signup");
  };
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
          <View style={[styles.sub_root, { height: height * 0.3 }]}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={[styles.logo, { height: height * 0.3 }]}
            />
            <Text style={styles.logo_text}>Login</Text>
          </View>

          <CustomInput
            type="email"
            value={username}
            setValue={setUsername}
            placeholder="Username or email"
            icon="icon"
          />
          <CustomInput
            type="email"
            value={password}
            setValue={setPassword}
            placeholder="Password"
            secureTextEntry={true}
          />
          <CustomButton text="Login" onPress={handleLogin} />
          <CustomButton
            text="Forgot password"
            type="TERTIARY"
            onPress={handleForgotPassword}
          />
          <CustomButton
            text="Sign in with Facebook"
            onPress={handleLogin}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            icon="icon"
          />
          <CustomButton
            text="Sign in with Google"
            onPress={handleLogin}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            icon="icon"
          />
          <CustomButton
            text="Don't have an account"
            type="TERTIARY"
            onPress={handleCreateAccount}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  sub_root: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: "30%",
    maxWidth: "200px",
    maxHeight: 100,
  },
  logo_text: {
    fontSize: 18,
    fontWeight: "700",
  },
});
export default SignIn;

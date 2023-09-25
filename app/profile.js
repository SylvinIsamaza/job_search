import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, FONT, icons, images, SIZES } from "../constants";

import { CustomInput, ScreenHeaderBtn } from "../components";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
const Profile = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="100%"
              handlePress={() => {
                router.back();
              }}
            />
          ),

          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: 0, alignItems: "center" }}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={styles.profile}
          />
        </View>
        <View style={styles.buttons}>
          <Text style={styles.label}>Username</Text>
          <CustomInput value={username} placeholder="username" />
          <Text style={styles.label}>Full name</Text>
          <CustomInput value={username} placeholder="username" />
          <Text style={styles.label}>Email</Text>
          <CustomInput value={username} placeholder="username" />
        <Text>Skills</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profile: {
    border: "none",
    aspectRatio: "1/1",
    height: 100,
    borderRadius: 40,
  },
  buttons: {
    padding: 20,
  },
  label: {
    color:"#222"
  }
});

export default Profile;

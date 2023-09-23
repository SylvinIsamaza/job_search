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

import { ScreenHeaderBtn } from "../components";
import { TextInput } from "react-native-gesture-handler";
const login = () => {
  const router = useRouter();
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
        <View style={{ flex: 1, padding: SIZES.medium, alignItems: "center" }}>
          <Image
            source={images.profile}
            resizeMode="contain"
            style={styles.profile}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profile: {
    width: "30%",
    border: "none",
  },
});

export default login;

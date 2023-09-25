import React from "react";
import styles from "./landing";
import { Image, Text, View } from "react-native";
import { icons } from "../../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRouter } from "expo-router";
const Landing = () => {
  const router = useRouter();
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={icons.landing}
        resizeMode="contain"
        style={styles.btnImg}
      />
      <View style={styles.footer}>
        <Text style={styles.welcomeMessage}>Find a perfect job match</Text>
        <Text style={styles.userName}>
          Finding job is now easy and faster than ever before{" "}
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigate.navigate("homeScreen");
          }}
        >
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

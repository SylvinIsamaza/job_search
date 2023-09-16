import React from "react";
import { View, Text, Image, Linking } from "react-native";

import styles from "./footer.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>Linking.openURL(url)} style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

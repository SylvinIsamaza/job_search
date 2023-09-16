import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./tabs.style";
import { FlatList } from "react-native-gesture-handler";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, handleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={handleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            handleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        contentContainerStyle={{
          columnGap: SIZES.small / 2,
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Tabs;

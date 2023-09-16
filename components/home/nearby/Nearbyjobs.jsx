import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../../hook/useFetch"

import styles from "./nearbyjobs.style";

import { SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
const Nearbyjobs = () => {
  const { data,isLoading,error } = useFetch('search', {
    query: "Python developer in Texas, USA",
    num_pages:1,
  })
 
  const router=useRouter()


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
            <Text>Something went wrong {error}</Text>
        ) : (data?.map((item) => (
          <NearbyJobCard job={item} key={`nearby-job/${item?.job_id}`} handleNavigate={() => {
            router.push(`job-detail-${item?.job_id}`)
  }}></NearbyJobCard>
))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;

import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";

import { COLORS, SIZES, icons } from "../../constants";
import { Stack, Tabs, router, useRouter } from "expo-router";
import {
  Company,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import useFetch from "../../hook/useFetch";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import About from "../../components/jobdetails/about/About";
const JobDetails = () => {
  const [refreshing, setRefreshing] = useState();
  const onRefresh = () => {};
  const route = useRoute();
  const id = route.params.id;
  const tabs = ["About", "Qualifications", "Responsibilities"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      case "About":
        return <About info={data[0].job_description} />;

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      default:
        break;
    }
  };
  // const [params,setParams]=useSearchParams()
  const { data, isLoading, error } = useFetch("job-details", { job_id: id });

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
          headerRight: () => {
            return <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />;
          },
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          ></RefreshControl>
        }
      >
        {isLoading ? (
          <ActivityIndicator
            size="large"
            style={{ color: COLORS.primary }}
          ></ActivityIndicator>
        ) : error ? (
          <Text>Something went wrong </Text>
        ) : data.length === 0 ? (
          <Text>No data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_countr}
            ></Company>
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;

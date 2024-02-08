import { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  RefreshControl,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { createRandomUser } from "@/utils/generate-dommy-data";
import { ThreadsContext } from "@/content/content-thread";
// import { SafeAreaView } from 'react-native-safe-area-context';

// const user = createRandomUser();
// console.log(user, "user");

export default function TabOneScreen() {
  const threads = useContext(ThreadsContext);
  console.log(threads);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "gray",
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            tintColor={"transparent"}
          />
        }
      >
        {threads.map((thread) => {
          return <Text key={thread.id}>{thread.author.name}</Text>;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

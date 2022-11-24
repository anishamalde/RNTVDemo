import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { VideoCard, Header } from "../../Components";
import { RootStackParamList } from "../../data/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState, useEffect } from "react";
import {useIAP} from 'react-native-iap';

type Props = NativeStackScreenProps<RootStackParamList, "LandingPage">;

const LandingPage = ({ navigation }: Props) => {

  const {connected } = useIAP();
  console.log(connected)
  
  const [videos, setVideos] = useState();

  const url = "https://my-fr4ncis-bucket.s3.amazonaws.com/TestData.json";

  const getAllVideos = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setVideos(data.testData))
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //   getAllVideos();
  // }, []);;

  return (
    <>
      <Header />
      <FlatList
        style={styles.landingPageContainer}
        data={videos}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.touch}
            onPress={() => navigation.navigate("Videos", { video: item })}
          >
            <VideoCard
              key={item.id}
              title={item.title}
              imgURL={item.imgURL}
              description={item.description}
            />
          </TouchableOpacity>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  landingPageContainer: {
    padding: 10,
  },
  touch: {
    margin: 10,
  },
});

export default LandingPage;

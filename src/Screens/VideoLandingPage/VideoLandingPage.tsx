import { ImageBackground, Text, StyleSheet, Button, View} from "react-native";
import { useEffect} from 'react';
import { RootStackParamList } from "../../data/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { requestSubscription, useIAP } from 'react-native-iap';

type Props = NativeStackScreenProps<RootStackParamList, "Videos">;

const VideoLandingPage = ({ navigation, route }: Props) => {

  const {connected, subscriptions, getSubscriptions} = useIAP();

  useEffect(() => {
    if (connected) {
      getSubscriptions({skus: [
        'com.amazon.sample.iap.subscription.mymagazine.month',
        'com.amazon.sample.iap.subscription.mymagazine.quarter',
      ]});
    }
  }, [getSubscriptions]);

  const handleBuySubscription = async (
    productId: string,
    offerToken?: string,
  ) => {
    try {
      await requestSubscription({
        sku: productId,
        ...(offerToken && {
          subscriptionOffers: [{sku: productId, offerToken}],
        }),
      });
    } catch (error) {
        console.log({message: `[${error.code}]: ${error.message}`, error});
    }
  };

  const video = route.params.video;

  return (
    <ImageBackground
      source={{uri: video.imgURL }}
      imageStyle={styles.imageStyle}
      style={styles.videoPageContainer}
    >
      <Text style={styles.videoTitle}>{video.title}</Text>
      <Text style={styles.videoDescription}>{video.description}</Text>
      <Text>{connected ? 'connected' : 'not connected'}</Text>
      <Text>{subscriptions.length}</Text>
      {subscriptions.map((subscription) => (
            <Text>{subscription.productId}</Text>
          ))}
      <View style={styles.buttonContainer}>
        <Button
          title="Buy now"
          color="#FFA724"
          // onPress={() =>
          //   navigation.navigate("VideoPlayerPage", {
          //     videoURL: video.videoURL,
          //   })
          onPress={()=> handleBuySubscription("com.amazon.sample.iap.subscription.mymagazine.quarter")}
        />
        <Button
          title="Back"
          color="#FFA724"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  videoPageContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: 10,
  },
  imageStyle: {
    opacity: 0.2,
  },
  videoTitle: {
    fontSize: 40,
    color: "white",
    fontWeight: "700",
  },
  videoDescription: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    width: 170,
  },
});

export default VideoLandingPage;

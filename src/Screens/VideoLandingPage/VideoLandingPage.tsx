import { ImageBackground, Text, StyleSheet, Button, View } from "react-native";
import { RootStackParamList } from "../../data/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Videos">;

const VideoLandingPage = ({ navigation, route }: Props) => {
  const video = route.params.video;

  return (
    <ImageBackground
      source={video.imgURL}
      imageStyle={styles.imageStyle}
      style={styles.videoPageContainer}
    >
      <Text style={styles.videoTitle}>{video.title}</Text>
      <Text style={styles.videoDescription}>{video.description}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Watch now"
          color="#FFA724"
          onPress={() =>
            navigation.navigate("VideoPlayerPage", {
              videoURL: video.videoURL,
            })
          }
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

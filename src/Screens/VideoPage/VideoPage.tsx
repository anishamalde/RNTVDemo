import { StyleSheet, Button, View } from "react-native";
// import Video from 'react-native-video';
import { RootStackParamList } from "../../data/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "VideoPlayerPage">;

const VideoPage = ({ navigation, route }: Props) => {
  return (
    <>
      <View style={styles.buttonContainer}>
      <Button
        title="Back"
        color="#FFA724"
        onPress={() => navigation.goBack()}
      />
    </View>
    {/* <Video source={{uri: route.params.videoURL}} /> */}
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default VideoPage;

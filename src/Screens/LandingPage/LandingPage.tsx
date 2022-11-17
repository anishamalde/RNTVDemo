import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { VideoCard, Header } from "../../Components";
import { useVideoData } from "../../Context/VideoDataContext";
import { RootStackParamList } from "../../data/types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "LandingPage">;

const LandingPage = ({ navigation }: Props) => {
  const { videos } = useVideoData();

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

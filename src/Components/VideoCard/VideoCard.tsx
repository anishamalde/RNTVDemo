import { StyleSheet, Text, View, Image } from "react-native";

interface IProps {
  title: string;
  imgURL: string;
  description: string;
}

const VideoCard = ({ title, imgURL, description }: IProps) => {
  console.log(description);

  return (
    <View style={styles.videoCardContainer}>
      <Image style={styles.videoImage} source={{ uri: imgURL }} />
      <View style={styles.videoText}>
        <Text style={styles.videoTitleText}>{title}</Text>
        <Text style={styles.videoDescriptionText}>
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoImage: {
    height: "75%",
  },
  videoText: {
    height: "25%",
    display: "flex",
    padding: 10,
    justifyContent: "space-around",
  },
  videoTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  videoDescriptionText: {
    color: "white",
  },
  videoCardContainer: {
    display: "flex",
    border: "1px solid white",
    borderRadius: 5,
    width: 350,
    height: 450,
  },
});

export default VideoCard;

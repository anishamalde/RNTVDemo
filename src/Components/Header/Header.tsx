import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  // function Header() {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to my RN Demo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#232F3E",
  },
  headerText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "700",
  },
});

export default Header;

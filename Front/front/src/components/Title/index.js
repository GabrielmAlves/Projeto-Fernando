import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.Title}>extcomp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    fontSize: 40,
    color: "orange",
    fontWeight: "bold",
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 60,
  },
});

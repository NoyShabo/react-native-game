import { Platform, StyleSheet, Text } from "react-native";

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ android: 0, ios: 2 }),
    borderWidth: 0,
    borderColor: "white",
    fontFamily: "open-sans-bold",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

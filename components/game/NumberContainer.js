import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: deviceWidth < 340 ? 12 : 24,
    margin: deviceWidth < 340 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
  },
});

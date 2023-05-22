import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

export function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 25,
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import Colors from "../constants/colors";

export function GameOverScreen({ userNumber, roundsNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Title> Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Number of rounds: <Text style={styles.highlight}>{roundsNumber}</Text>
      </Text>
      <Text style={[styles.summaryText, styles.lastSummary]}>
        Number was: <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: Colors.primary700,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
    fontSize: 22,
  },
  lastSummary: {
    marginBottom: 40,
  },
});

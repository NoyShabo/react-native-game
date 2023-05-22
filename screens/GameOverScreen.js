import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import Colors from "../constants/colors";

export function GameOverScreen({ userNumber, roundsNumber, onRestart }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 500) {
    imageSize = 80;
  }

  const imageStyles = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Title> Game is over!</Title>
        <View style={[styles.imageContainer, imageStyles]}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
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

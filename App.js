import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Button,
  StatusBar,
} from "react-native";
import axios from "axios";

export default function App() {
  const [value, setValue] = useState("");
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=3684c2f87ef57d6a97bf0acdf918a55c";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setValue(response.data);
        console.log(value);
      })
      .catch((error) =>
        console.log(`This error is present here boss - ${error}`)
      );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Working live with react native</Text>
        <Text> Api Data - {value.name} </Text>
        <Button title="Click Button" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

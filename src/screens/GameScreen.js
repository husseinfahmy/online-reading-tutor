import * as React from "react";
import { Text, View } from "react-native";

// local components
import { Button } from "../components/index";
import variables from '../styles/variables';

function GameScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: variables.palette.gray.light, height: "100%", justifyContent: "center"}}>
      <Button
        text="Click here to play a minigame"
        onPress={() => navigation.navigate("Minigame")}
      />
      <Button
        text="individual lesson"
        onPress={() => navigation.navigate("Lesson")}
      />
    </View>
  );
}


export default GameScreen;

import * as React from "react";
import * as Constants from "../constants/constants";
import { Text, View, Button, StyleSheet, Image } from "react-native";

// Export displaybadge component
import DisplayBadge from "../components/DisplayBadge";

// Simplest Case for now:
// Badge to be "given" upon completion of lesson

// Simplest Interface for now
// 1. Add a button in home screen / hyperlink called "Badges"
// 2. Once badge link has opened, show list of all badges. Badges not aquired will be grayed out
// 3. The lesson completion badge should not be grayed out once the lesson has been completed

// More Complex Cases:
// 1. Map out use cases for obtaining badges
//   1.1 Badge for streaks
//   1.2 Badge for completion of world
//   1.3 .....

// More complex interface
// 1. Badges shows up separately within users profile
// 2. All badges both aquired and not aquired show up in the profile section
// 3. Everytime "Profile" is opened, we do a call to a database of some sort
//    which has information which badges the user has obtained.
// 4. Using this information we decide which badges to gray out and which to show

// *****
// TODO:
// Move image css to its own separate styleshet within src/styles
// instead of inline
// *****

const BadgeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's earn this badges!</Text>

      <DisplayBadge badges={props.badges} />

      <Button
        title="Click here to go back to home screen"
        onPress={() => {
          props.navigation.navigate("Home");
          console.log(props.badges);
          // badges is an object
          // [0] -> {badgeId: .. , badgeName: .. , badgeState: ..},
          // ...
        }}
      ></Button>
    </View>
  );
};

export default BadgeScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffffff',
  },
  title: {
      margin: 20,
      alignSelf: "center",
      fontWeight: 'bold',
      fontSize: 30
  }

});

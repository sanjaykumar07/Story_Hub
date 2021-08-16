import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";
import LoginScreen from "./screens/LoginScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: { screen: WriteStoryScreen },
    ReadStory: { screen: ReadStoryScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const route = navigation.state.routeName;
        if (route === "ReadStory") {
          return (
            <Image
              style={{ width: 34, height: 34 }}
              source={require("./assets/read.png")}
            />
          );
        } else if (route === "WriteStory") {
          return (
            <Image
              style={{ width: 40, height: 40 }}
              source={require("./assets/write.png")}
            />
          );
        }
      },
    }),
  }
);

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

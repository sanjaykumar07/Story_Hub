import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function WriteStoryScreen() {
  return (
    <SafeAreaProvider style={{ backgroundColor: "black" }}>
      <Header
        backgroundColor={"red"}
        centerComponent={{
          text: "Story Hub",
          style: styles.headText,
        }}
      />

      <TextInput
        placeholder="Story Title"
        style={[styles.inputStyle, { marginTop: 20 }]}
      ></TextInput>

      <TextInput
        placeholder="Author"
        style={[styles.inputStyle, { marginTop: 10 }]}
      ></TextInput>

      <TextInput
        placeholder="Write your story"
        multiline="true"
        style={[styles.inputStyle, { marginTop: 10, height: 350 }]}
      ></TextInput>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  inputStyle: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  button: {
    width: "15%",
    height: 50,
    borderWidth: 3,
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 20,
    borderColor: "red",
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    marginTop: 5,
    color: "red",
    fontSize: "150%",
  },
  headText: {
    textAlign: "center",
    color: "green",
    fontSize: "200%",
    fontFamily: "megrim",
  },
});

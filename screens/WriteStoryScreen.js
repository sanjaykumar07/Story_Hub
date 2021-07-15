import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import db from "../config";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      story: "",
    };
  }

  submitStory = async () => {
    db.collection("writeStory").add({
      author: this.state.author,
      story: this.state.story,
      title: this.state.title,
    });
    var transactionMessage = "Book Issued";
    ToastAndroid.show(transactionMessage, ToastAndroid.SHORT);
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ backgroundColor: "black" }}>
        <SafeAreaProvider>
          <Header
            backgroundColor={"#C8A2C8"}
            centerComponent={{
              text: "Story Hub",
              style: styles.headText,
            }}
          />
        </SafeAreaProvider>
        <TextInput
          placeholder="Story Title"
          style={[styles.inputStyle, { marginTop: 20 }]}
          onChangeText={(text) => {
            this.setState({
              title: text.toUpperCase(),
            });
          }}
        ></TextInput>

        <TextInput
          placeholder="Author"
          style={[styles.inputStyle, { marginTop: 10 }]}
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
        ></TextInput>

        <TextInput
          placeholder="Write your story"
          multiline="true"
          style={[styles.inputStyle, { marginTop: 10, height: 250 }]}
          onChangeText={(text) => {
            this.setState({
              story: text,
            });
          }}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderColor: "#C8A2C8",
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
    borderColor: "#C8A2C8",
    marginBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    marginTop: 5,
    color: "white",
    fontSize: "150%",
  },
  headText: {
    textAlign: "center",
    color: "green",
    fontSize: "200%",
    fontFamily: "megrim",
  },
});

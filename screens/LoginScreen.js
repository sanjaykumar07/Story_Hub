import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import db from "../config";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";
require("firebase/auth");

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = async (email, password) => {
    var response = false;
    if (email && password) {
      try {
        response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      } catch (error) {
        alert(error);
      }
      if (response) {
        console.log("user login");
        this.props.navigation.navigate("WriteStory");
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={[styles.input]}
            placeholder="E-Mail"
            onChangeText={(text) => {
              this.setState({ email: text });
            }}
            keyboardType="email-address"
          />

          <TextInput
            style={[styles.input]}
            placeholder="Password"
            onChangeText={(text) => {
              this.setState({ password: text });
            }}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.login(this.state.email, this.state.password);
            }}
          >
            <Text style={[styles.buttonText]}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: 120,
    height: 50,
    height: 40,
    marginRight: 135,
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 5,
  },
  input: {
    borderRadius: 5,
    width: "90%",
    height: "20%",
    marginTop: 10,
    backgroundColor: "white",
    alignSelf: "center",
    fontSize: 15,
    textAlign: "center",
  },
  loginContainer: {
    backgroundColor: "#2b4057",
    borderRadius: 20,
    width: "30%",
    height: "50%",
    alignItems: "center",
    padding: 50,
    alignSelf: "center",
    marginTop: "11.5%",
  },
  title: {
    fontSize: 35,
    color: "white",
  },
});

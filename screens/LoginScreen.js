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
import * as firebase from "firebase";
import { auth } from "react-native-firebase";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = async(email,password)=>{
      var response = false;
      if(email && password){
          try{
              response = await firebase.auth().signInWithEmailAndPassword(email,password)
              alert(response)
          }catch(error){
              alert(error)
          }
          if(response){
            this.props.navigation.navigate('WriteStory')
        }
      }

  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="enter email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="enter password"
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
          secureTextEntry={true}
        />

        <TouchableOpacity>
            style={}
            onPress={()=>{this.login(this.state.email,this.state.password)}}
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

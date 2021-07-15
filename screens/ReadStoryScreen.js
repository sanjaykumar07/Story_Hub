import React from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { Header } from "react-native-elements";
import db from "../config";
import { TouchableOpacity } from "react-native";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      dataSource: [],
      search: "",
    };
  }
  componentDidMount() {
    this.retriveStories();
  }

  updateSearch = (search) => {
    this.setState({ search });
  };

  retriveStories = () => {
    try {
      var allStories = [];
      var stories = db
        .collection("writeStory")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            allStories.push(doc.data());
            console.log("this are the stories", allStories);
          });
          this.setState({ allStories });
        });
    } catch (error) {
      console.log(error);
    }
  };

  SearchFilterFunction(text) {
    const newData = this.state.allStories.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <Header
            backgroundColor={"#C8A2C8"}
            centerComponent={{
              text: "Story Hub",
              style: styles.headText,
            }}
          />
        </SafeAreaProvider>
        <View styles={{ height: 20, width: "100%" }}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={(text) => this.SearchFilterFunction(text)}
            onClear={(text) => this.SearchFilterFunction("")}
            value={this.state.search}
          />
        </View>

        <ScrollView>
          <View>
            {this.state.search === ""
              ? this.state.allStories.map((item) => (
                  <View
                    style={{
                      //  borderColor: "pink",
                      // borderWidth: 2,
                      padding: 10,
                      marginBottom: 10,
                      alignSelf: "center",
                      width: 400,
                      backgroundColor: "grey",
                    }}
                  >
                    <Text
                      style={[styles.readText, { fontSize: 25, color: "blue" }]}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.readText}>By {item.author}</Text>
                  </View>
                ))
              : this.state.dataSource.map((item) => (
                  <View
                    style={{
                      padding: 10,
                      marginBottom: 10,
                      alignSelf: "center",
                      width: 400,
                      backgroundColor: "grey",
                    }}
                  >
                    <Text
                      style={[styles.readText, { fontSize: 25, color: "blue" }]}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.readText}>By {item.author}</Text>
                  </View>
                ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  readText: {
    color: "white",
    fontSize: 15,
    fontFamily: "Comic sans MS",
    alignSelf: "center",
  },

  headText: {
    textAlign: "center",
    color: "green",
    fontSize: "200%",
    fontFamily: "megrim",
  },
});

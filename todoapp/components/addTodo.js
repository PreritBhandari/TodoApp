import React, { useState, Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";

export default class AddTodo extends Component {
  state = {
    text: "",
  };

  changeHandler = (val) => {
    this.setState({
      text: val,
    });
  };

  render() {
    const { text } = this.state;
    return (
      <View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="add todo"
            onChangeText={this.changeHandler}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.props.submitHandler(text)}
          style={{
            backgroundColor: "#fed",
            width: 90,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "34%",
            borderRadius: 18,
          }}
        >
          <Text>Add Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

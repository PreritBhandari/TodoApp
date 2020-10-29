import React, { Component } from "react";
import {
  TouchableOpacity,
  AsyncStorage,
  Text,
  StyleSheet,
  View,
} from "react-native";

export default class TodoItem extends Component {
  state = {
    colorChanged: "purple",
  };

  changeBackground = async (item) => {
    console.log("background changeddddddd", item);
    this.setState({
      colorChanged: "green",
    });
    if (this.state.colorChanged == "green") {
      this.setState({
        colorChanged: "purple",
      });
    }
  };

  render() {
    const { item, pressHandler } = this.props;

    return (
      <TouchableOpacity
        onPress={() => this.changeBackground(item)}
        onLongPress={() => pressHandler(item.key)}
        style={styles.item}
      >
        <Text style={{ color: this.state.colorChanged, fontWeight: "bold" }}>
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});

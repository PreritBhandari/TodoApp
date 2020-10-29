import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { StyleSheet, Text, View, FlatList, AsyncStorage } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/addTodo";

export default class App extends Component {
  arr = [];
  state = {};

  submitHandler = async (text) => {
    this.arr.push({ text: text, key: Math.random().toString() });
    await AsyncStorage.setItem("mylist", JSON.stringify(this.arr));
    let value = JSON.parse(await AsyncStorage.getItem("mylist"));
    this.setState({
      todos: value,
    });
    console.log(value);
  };

  async componentDidMount() {
    let value = JSON.parse(await AsyncStorage.getItem("mylist"));
    this.setState({
      todos: value,
    });
    {
      if (this.arr != null) {
        this.arr = value;
      }
    }
    console.log(value);
  }

  pressHandler = async (key) => {
    console.log(key);
    let removeTodo = this.state.todos.filter(function (e) {
      return e.key !== key;
    });
    AsyncStorage.setItem("mylist", JSON.stringify(removeTodo));
    this.setState({
      todos: removeTodo,
    });
    this.arr = removeTodo;
  };

  render() {
    const { todos } = this.state;

    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={this.submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  arr={this.arr}
                  item={item}
                  pressHandler={this.pressHandler}
                />
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

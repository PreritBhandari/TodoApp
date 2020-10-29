import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onLongPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "purple",
    fontWeight: "bold",
  },
});

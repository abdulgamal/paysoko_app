import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { width } from "../constants";

function Card({ name, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.big}>{name}</Text>
      <Text style={styles.small}>{description}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    width: width * 0.7,
    marginRight: 20,
  },
  big: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  small: {
    lineHeight: 20,
  },
});

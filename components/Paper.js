import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Paper({ icon, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>{icon}</View>
      <Text style={styles.big}>{description}</Text>
    </View>
  );
}

export default Paper;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  btn: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  big: {
    fontWeight: "bold",
  },
});

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { height } from "../constants";
import * as Linking from "expo-linking";

function BusinessCard({ item }) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.cover}>
      <Image source={{ uri: item.img }} resizeMode="cover" style={styles.img} />
      <View style={styles.center}>
        <Text style={styles.big}>{item.title}</Text>
        <Text style={styles.small}>
          {item.desc.length > 190 ? item.desc.slice(0, 190) + "..." : item.desc}
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handlePress(item.href)}
        >
          <Text>Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BusinessCard;

const styles = StyleSheet.create({
  cover: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: height * 0.3,
  },
  center: {
    padding: 20,
  },
  big: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#171347",
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "600",
    marginVertical: 10,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#cddefa",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
});

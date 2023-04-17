import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Linking from "expo-linking";
import { height, width } from "../constants";
import { Ionicons } from "@expo/vector-icons";

function SolCard({ item }) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="contain" style={styles.img} />
      <View style={styles.center}>
        <Text style={styles.big}>{item.name}</Text>
        <Text style={styles.small}>{item.description}</Text>
        <TouchableOpacity onPress={() => handlePress(item.link)}>
          <LinearGradient
            style={styles.btn}
            colors={["#171347", "#152745", "#2374f7"]}
          >
            <Text style={styles.btnText}>{item.tag}</Text>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SolCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    width: width * 0.7,
    paddingHorizontal: 10,
    marginRight: 15,
  },
  img: {
    width: "100%",
    height: height * 0.1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  big: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginVertical: 10,
    color: "#171347",
  },
  small: {
    textAlign: "center",
    marginVertical: 5,
    color: "#9598A2",
    fontWeight: "500",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 15,
  },
  btnText: {
    color: "#FFFF",
    marginRight: 10,
  },
});

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { width } from "../constants";

const reviews = [
  {
    name: "Esther Ochieng",
    title: "Barista champion of Kenya",
    des: "PaySoko has expanded my coffee business to reach more customers beyond Kenya. I am very happy to be using their solutions and selling to more customers than I ever thought I would",
    profile: require("../assets/est.jpeg"),
  },
  {
    name: "Juliet",
    title: "Owner at VaaLeo Designs",
    des: "PaySoko has given us an online presence and through our storefront we have been able to increase sales by over 300% month to month.",
    profile: require("../assets/julie.jpeg"),
  },
  {
    name: "Khalifa Crafted",
    title: "Owner",
    des: "We were looking for a way to sell our wallets to customers all over the country. PaySoko provided a solution that is easy to use and got us to more customers all across the country regardless of the geo location",
    profile: require("../assets/khalif.jpeg"),
  },
];
const Card = ({ item }) => (
  <View style={styles.container}>
    <Text style={styles.small}>{item.des}</Text>
    <View style={styles.row}>
      <View style={styles.btn}>
        <Image source={item.profile} resizeMode="contain" style={styles.img} />
      </View>
      <View>
        <Text style={styles.big}>{item.name}</Text>
        <Text style={styles.fade}>{item.title}</Text>
      </View>
    </View>
  </View>
);

function Carousels() {
  return reviews.map((review) => <Card key={review.name} item={review} />);
}

export default Carousels;

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
    fontSize: 14,
    marginBottom: 3,
  },
  small: {
    lineHeight: 20,
    marginBottom: 10,
  },
  btn: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fade: {
    fontSize: 12,
    fontWeight: "500",
    color: "gray",
  },
});

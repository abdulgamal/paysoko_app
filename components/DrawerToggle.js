import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DrawerToggle = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.spacer}>
      {Platform.OS === "android" ? (
        <Ionicons
          name="md-menu"
          size={24}
          color="#171347"
          onPress={() => navigation.openDrawer()}
        />
      ) : (
        <Ionicons
          name="ios-menu"
          size={24}
          color="#171347"
          onPress={() => navigation.openDrawer()}
        />
      )}
    </View>
  );
};

export default DrawerToggle;

const styles = StyleSheet.create({
  spacer: {
    marginBottom: 5,
    backgroundColor: "transparent",
  },
});

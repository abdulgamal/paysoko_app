import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import DrawerToggle from "../components/DrawerToggle";

const Payments = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <View style={styles.head}>
          <View style={styles.spacer}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btnd}>
                <AntDesign name="plus" size={14} color="#2437E4" />
                <Text style={styles.btnText}>Create Split Payment Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cover}>
          <View style={styles.center}>
            <AntDesign name="folderopen" size={34} color="green" />
            <Text style={styles.big}>No Split Payment Accounts Found</Text>
            <Text style={styles.small}>
              We couldn't find any split payments accounts added under this user
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3FA",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  main: {
    paddingHorizontal: 15,
    flex: 1,
  },
  spacer: {
    marginVertical: 20,
  },
  big: {
    fontSize: 20,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnd: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D3DCFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  btnText: {
    color: "#2437E4",
    marginLeft: 5,
  },
  cover: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  head: {
    flex: 0.2,
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "bold",
    textAlign: "center",
  },
});

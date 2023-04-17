import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { height } from "../constants";
import DrawerToggle from "../components/DrawerToggle";

const WebIntegration = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.head}>
            <View style={styles.spacer}>
              <View style={styles.block}>
                <Text style={styles.big}>Website Integration</Text>
                <View style={styles.row}>
                  <TouchableOpacity style={styles.btnd}>
                    <AntDesign name="plus" size={14} color="#2437E4" />
                    <Text style={styles.btnText}>Add Website</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnd}>
                    <AntDesign name="plus" size={14} color="#2437E4" />
                    <Text style={styles.btnText}>Documentation</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cover}>
            <View style={styles.center}>
              <AntDesign name="folderopen" size={34} color="green" />
              <Text style={styles.big}>No Website Found</Text>
              <Text>We couldn't find any website to this account</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={styles.center}>
              <Text style={styles.big}>Statistics</Text>
              <Text style={styles.spaced}> Received</Text>
              <Text style={styles.big}> KES 0.00</Text>
            </View>
            <View style={styles.bottom}>
              <View style={styles.rowd}>
                <Text>PENDING</Text>
                <Text>KES 0.00</Text>
              </View>
              <View style={styles.rowd}>
                <Text>ABANDONED</Text>
                <Text>KES 0.00</Text>
              </View>
              <View style={styles.rowd}>
                <Text>TOTAL</Text>
                <Text>KES 0.00</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WebIntegration;

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
  spaced: {
    marginVertical: 10,
  },
  box: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: "#9598A2",
    padding: 10,
    marginVertical: 10,
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
  block: {
    gap: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  rowd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btnd: {
    paddingVertical: 10,
    paddingHorizontal: 10,
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
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.7,
  },
  head: {
    marginBottom: 10,
  },
});

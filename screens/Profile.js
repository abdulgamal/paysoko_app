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
import {
  Foundation,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import React from "react";
import { height, width } from "../constants";
import DrawerToggle from "../components/DrawerToggle";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.spacer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cover}>
                <View style={styles.row}>
                  <View style={styles.round}>
                    <Foundation name="dollar" size={18} color="#9598A2" />
                  </View>
                  <Text style={styles.small}>Revenue</Text>
                </View>
                <Text style={styles.big}>KES 0.00</Text>
              </View>
              <View style={styles.cover}>
                <View style={styles.row}>
                  <FontAwesome5 name="cart-plus" size={18} color="#9598A2" />
                  <Text style={styles.small}>Total Payout</Text>
                </View>
                <Text style={styles.big}>KES 0.00</Text>
                <Text style={styles.smalls}>0.00% of limit</Text>
                <TouchableOpacity style={styles.btn}>
                  <AntDesign name="arrowup" size={14} color="#2437E4" />
                  <Text style={styles.btnText}>Upgrade Account</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cover}>
                <View style={styles.row}>
                  <Ionicons
                    name="md-calendar-outline"
                    size={18}
                    color="#9598A2"
                  />
                  <Text style={styles.small}>Next Payout</Text>
                </View>
                <Text style={styles.big}>KES 0.00</Text>
                <Text style={styles.smalls}>Due 2023/04/18</Text>
                <TouchableOpacity style={styles.btn}>
                  <Ionicons
                    name="ios-refresh-circle-outline"
                    size={14}
                    color="#2437E4"
                  />
                  <Text style={styles.btnText}>Past Payouts</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={styles.spacer}>
            <View style={styles.head}>
              <View style={styles.rowb}>
                <Ionicons
                  name="ios-refresh-circle-outline"
                  size={14}
                  color="#2437E4"
                />
                <Text style={styles.small}>Earning Log</Text>
              </View>
              <View style={styles.center}>
                <AntDesign name="folderopen" size={34} color="green" />
                <Text style={styles.big}>No Earning History</Text>
                <Text>We couldn't find any earning log to this account</Text>
              </View>
            </View>
          </View>
          <View style={styles.spacer}>
            <View style={styles.last}>
              <Text style={styles.big}>API Documentation</Text>
              <Text style={styles.smalls}>
                Our documentation contains what you need to integrate PaySoko in
                your website.
              </Text>
              <TouchableOpacity style={styles.btnd}>
                <Ionicons
                  name="ios-refresh-circle-outline"
                  size={14}
                  color="#2437E4"
                />
                <Text style={styles.btnText}>Go To Docs</Text>
              </TouchableOpacity>
              <View style={styles.spacer}>
                <Text style={styles.big}>Your Keys</Text>
                <View style={styles.list}>
                  <View style={styles.bg}>
                    <Text>PUBLIC KEY</Text>
                  </View>
                  <Text style={styles.key} numberOfLines={1}>
                    PUB-NdBsm0MMbXuXi3lCOBVSpSdPrfuVmton
                  </Text>
                  <TouchableOpacity style={styles.bg}>
                    <AntDesign name="copy1" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.list}>
                  <View style={styles.bg}>
                    <Text>SECRET KEY</Text>
                  </View>
                  <Text style={styles.key} numberOfLines={1}>
                    PUB-NdBsm0MMbXuXi3lCOBVSpSdPrfuVmton
                  </Text>
                  <TouchableOpacity style={styles.bg}>
                    <AntDesign name="copy1" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

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
  list: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  bg: {
    backgroundColor: "#F8F9FE",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  key: {
    flex: 1,
  },
  cover: {
    backgroundColor: "white",
    padding: 15,
    width: width * 0.7,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  spacer: {
    marginVertical: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  rowb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
    position: "absolute",
    top: 3,
    left: 10,
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "bold",
  },
  smalls: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "600",
    marginBottom: 10,
  },
  head: {
    height: height * 0.5,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  round: {
    backgroundColor: "#CBD2DC",
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  big: {
    fontSize: 20,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D3DCFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  btnd: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D3DCFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginVertical: 10,
  },
  btnText: {
    color: "#2437E4",
    marginLeft: 5,
  },
  last: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import DrawerToggle from "../components/DrawerToggle";

const Withdrawal = () => {
  const [isChecked, setChecked] = useState(false);
  const [isTill, setIsTill] = useState(false);
  const [isPaybill, setIsPaybill] = useState(false);
  const [paybill, setPaybill] = useState("");
  const [phone, setPhone] = useState("");
  const [till, setTill] = useState("");
  const [amount, setAmount] = useState("");

  const handlePhone = () => {
    setChecked(true);
    setIsTill(false);
    setIsPaybill(false);
  };
  const handleTill = () => {
    setChecked(false);
    setIsTill(true);
    setIsPaybill(false);
  };
  const handleBill = () => {
    setChecked(false);
    setIsTill(false);
    setIsPaybill(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <View style={styles.spacer}>
          <View style={styles.center}>
            <Text style={styles.big}>Fill in withdrawal details below</Text>
            <Text style={styles.small}>
              Would you like to withdraw to Phone, Till or Paybill?
            </Text>
          </View>
        </View>
        <View style={styles.spacer}>
          <View style={styles.sections}>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={handlePhone}
              />
              <Text style={styles.paragraph}>Phone</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isTill}
                onValueChange={handleTill}
              />
              <Text style={styles.paragraph}>Till</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isPaybill}
                onValueChange={handleBill}
              />
              <Text style={styles.paragraph}>Paybill</Text>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.spacer}>
          {isPaybill && (
            <View>
              <TextInput
                label="Enter Paybill Number"
                value={paybill}
                onChangeText={(text) => setPaybill(text)}
                mode="outlined"
                keyboardType="numeric"
              />
            </View>
          )}
          {isChecked && (
            <View>
              <TextInput
                label="Enter Phone Number"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                mode="outlined"
                keyboardType="numeric"
              />
            </View>
          )}
          {isTill && (
            <View>
              <TextInput
                label="Enter Till Number"
                value={till}
                onChangeText={(text) => setTill(text)}
                mode="outlined"
                keyboardType="numeric"
              />
            </View>
          )}
        </View>
        <View style={styles.spacer}>
          {(isTill || isChecked || isPaybill) && (
            <View>
              <TextInput
                label="Enter Amount (KES)"
                value={amount}
                onChangeText={(text) => setAmount(text)}
                mode="outlined"
                keyboardType="numeric"
              />
            </View>
          )}
        </View>
        <View style={styles.hrd} />
        <View style={styles.spacer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Send Request</Text>
            <FontAwesome name="send-o" size={24} color="#2437E4" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Withdrawal;

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
  hr: {
    marginBottom: 30,
    borderBottomColor: "#9598A2",
    borderBottomWidth: 1,
  },
  hrd: {
    marginTop: 30,
    borderBottomColor: "#9598A2",
    borderBottomWidth: 1,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  sections: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  spacer: {
    marginVertical: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  big: {
    fontSize: 20,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
    textAlign: "center",
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "bold",
    textAlign: "center",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D3DCFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#2437E4",
    marginRight: 10,
  },
});

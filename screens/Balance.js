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
import { List, TextInput } from "react-native-paper";
import DrawerToggle from "../components/DrawerToggle";

const Balance = () => {
  const [amount, onChangeAmount] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [expire, onChangeExpire] = React.useState("");
  const [cvc, onChangeCvc] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <View style={styles.spacer}>
          <List.AccordionGroup>
            <List.Accordion title="Card" id="1">
              <View style={styles.spacer}>
                <View style={styles.row}>
                  <View style={styles.box}>
                    <Text>KES</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="0.0"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.row}>
                  <View style={styles.boxed}>
                    <AntDesign name="creditcard" size={24} color="black" />
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Card Number"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.last}
                    onChangeText={onChangeExpire}
                    value={expire}
                    placeholder="MM/YY"
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.last}
                    onChangeText={onChangeCvc}
                    value={cvc}
                    placeholder="CVC"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.spacer}>
                  <TouchableOpacity style={styles.btnd}>
                    <Text style={styles.btnText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </List.Accordion>
            <List.Accordion title="M-PESA" id="2">
              <View style={styles.spacer}>
                <View style={styles.row}>
                  <View style={styles.box}>
                    <Text>KES</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="0.0"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.spacer}>
                  <TouchableOpacity style={styles.btnd}>
                    <Text style={styles.btnText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </List.Accordion>
            <List.Accordion title="Transfer" id="3">
              <View style={styles.spacer}>
                <View style={styles.row}>
                  <View style={styles.box}>
                    <Text>KES</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="0.0"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.spacer}>
                  <TouchableOpacity style={styles.btnd}>
                    <Text style={styles.btnText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </List.Accordion>
            <List.Accordion title="Crypto Currency" id="4">
              <View style={styles.spacer}>
                <View style={styles.row}>
                  <View style={styles.box}>
                    <Text>KES</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="0.0"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.spacer}>
                  <TouchableOpacity style={styles.btnd}>
                    <Text style={styles.btnText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </List.Accordion>
            <List.Accordion title="Others" id="5">
              <View style={styles.spacer}>
                <View style={styles.row}>
                  <View style={styles.box}>
                    <Text>KES</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeAmount}
                    value={amount}
                    placeholder="0.0"
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.spacer}>
                  <TouchableOpacity style={styles.btnd}>
                    <Text style={styles.btnText}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </List.Accordion>
          </List.AccordionGroup>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3FA",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  box: {
    padding: 20,
    backgroundColor: "#E8E6E6",
  },
  boxed: {
    padding: 20,
    backgroundColor: "#FAFAFA",
  },
  main: {
    paddingHorizontal: 15,
    flex: 1,
  },
  spacer: {
    marginVertical: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  last: {
    backgroundColor: "#FAFAFA",
  },
  btnd: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#D3DCFA",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#2437E4",
    marginLeft: 5,
  },
});

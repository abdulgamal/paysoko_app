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
import React, { useState } from "react";
import { DataTable } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import DrawerToggle from "../components/DrawerToggle";

const optionsPerPage = [2, 3, 4];

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <View style={styles.row}>
          <TouchableOpacity style={styles.btnd}>
            <AntDesign name="arrowdown" size={14} color="#2437E4" />
            <Text style={styles.btnText}>Received</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnd}>
            <AntDesign name="arrowup" size={14} color="#2437E4" />
            <Text style={styles.btnText}>Transfered</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cover}>
          <DataTable>
            <ScrollView horizontal={true}>
              <View>
                <DataTable.Header>
                  <DataTable.Title style={styles.title}>TYPE</DataTable.Title>
                  <DataTable.Title style={styles.title}>FROM</DataTable.Title>
                  <DataTable.Title style={styles.title}>AMOUNT</DataTable.Title>
                  <DataTable.Title style={styles.title}>
                    TRANSACTION ID
                  </DataTable.Title>
                  <DataTable.Title style={styles.title}>
                    DESCRIPTION
                  </DataTable.Title>
                  <DataTable.Title style={styles.title}>DATE</DataTable.Title>
                </DataTable.Header>

                {/* <DataTable.Row>
                  <DataTable.Cell style={styles.title}>
                    Frozen yogurt
                  </DataTable.Cell>
                </DataTable.Row> */}
                <View style={styles.center}>
                  <Text>No data available in table</Text>
                </View>
              </View>
            </ScrollView>

            <DataTable.Pagination
              page={page}
              numberOfPages={1}
              onPageChange={(page) => setPage(page)}
              label="0-0 of 0"
              optionsPerPage={optionsPerPage}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              showFastPagination
              optionsLabel={"Rows per page"}
            />
          </DataTable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Transactions;

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
  row: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    marginRight: 10,
  },
  cover: {
    backgroundColor: "white",
    padding: 10,
  },
  center: {
    paddingLeft: 20,
    marginVertical: 10,
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
});

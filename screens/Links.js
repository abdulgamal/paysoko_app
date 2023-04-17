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

const Links = () => {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <DrawerToggle />
        <View style={styles.spacer}>
          <View style={styles.row}>
            <Text style={styles.big}>Payment Links</Text>
            <TouchableOpacity style={styles.btnd}>
              <AntDesign name="plus" size={14} color="#2437E4" />
              <Text style={styles.btnText}>Create Link</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cover}>
          <DataTable>
            <ScrollView horizontal={true}>
              <View>
                <DataTable.Header>
                  <DataTable.Title style={styles.title}>STATUS</DataTable.Title>
                  <DataTable.Title style={styles.title}>
                    CUSTOMER NAMES
                  </DataTable.Title>
                  <DataTable.Title style={styles.title}>AMOUNT</DataTable.Title>
                  <DataTable.Title style={styles.title}>
                    CREATED
                  </DataTable.Title>
                  <DataTable.Title>LINK URL</DataTable.Title>
                </DataTable.Header>

                {/* <DataTable.Row>
                  <DataTable.Cell>Frozen yogurt</DataTable.Cell>
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

export default Links;

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
    marginVertical: 10,
  },
  title: {
    marginRight: 10,
  },
  big: {
    fontSize: 20,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "capitalize",
  },
  cover: {
    backgroundColor: "white",
    padding: 10,
  },
  center: {
    paddingLeft: 20,
    marginVertical: 10,
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
});

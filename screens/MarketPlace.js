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
import React, { useEffect, useRef, useState } from "react";
import BusinessCard from "../components/BusinessCard";
import { Ionicons } from "@expo/vector-icons";
import { categories, posts } from "../DummyData";

const MarketPlace = () => {
  const [active, setActive] = useState(1);
  const scrollRef = useRef();
  const [initial, setInitial] = useState(0);
  const [skip, setSkip] = useState(9);
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);

  const goNext = () => {
    setInitial((prev) => prev + 9);
    setSkip((prev) => prev + 9);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const goBack = () => {
    setInitial((prev) => prev - 9);
    setSkip((prev) => prev - 9);
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  const handleClick = (item) => {
    setActive(item.id);
    setActiveCategory(item.name);
    setInitial(0);
    setSkip(9);
  };
  const filterData = () => {
    setProducts([]);
    if (activeCategory === "All") {
      setProducts(posts);
    } else {
      const data = posts.filter((post) => post.category === activeCategory);
      setProducts(data);
    }
  };

  useEffect(() => {
    filterData();
  }, [activeCategory]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
          <View style={styles.center}>
            <Text style={styles.header}>Featured Businesses</Text>
            <Text style={styles.small}>
              Businesses that are loved by the community. Updated every hour.
            </Text>
          </View>
          <View style={styles.spacer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={category.id == active ? styles.tab : styles.tabs}
                  onPress={() => handleClick(category)}
                >
                  <Text style={category.id == active && styles.textbtn}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.spacer}>
            {products.slice(initial, skip).map((product) => (
              <BusinessCard item={product} key={product.id} />
            ))}
          </View>
          <View style={styles.spacer}>
            {products.length > 9 && (
              <View style={styles.center}>
                <Text>
                  Showing {initial + 1} to{" "}
                  {skip > products.length ? products.length : skip} of{" "}
                  {products.length}
                </Text>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={styles.rounded}
                    disabled={initial === 0}
                    onPress={goBack}
                  >
                    <Ionicons name="arrow-back-sharp" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.rounded}
                    disabled={skip >= products.length}
                    onPress={goNext}
                  >
                    <Ionicons
                      name="arrow-forward-sharp"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MarketPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3FA",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    color: "#171347",
    marginVertical: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  small: {
    fontSize: 16,
    color: "#9598A2",
    fontWeight: "600",
    textAlign: "center",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#4338C9",
    marginRight: 20,
  },
  tabs: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: "#cddefa",
    marginRight: 20,
  },
  spacer: {
    marginVertical: 15,
  },
  textbtn: {
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 20,
  },
  rounded: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#cddefa",
    justifyContent: "center",
    alignItems: "center",
  },
});

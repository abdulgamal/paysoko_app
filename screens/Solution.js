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
import { width } from "../constants";
import SolCard from "../components/SolCard";
import { LinearGradient } from "expo-linear-gradient";

const businesses = [
  {
    name: "Payments",
    image: require("../assets/paysoko.png"),
    description: "Easy Digital Payments Solutions",
    link: "https://paysoko.com/",
    tag: "paysoko.com",
  },
  {
    name: "WOMEN EMPOWERMENT",
    image: require("../assets/dadasoko.png"),
    description: "Empowering Women Enterprenuers in all Businesses",
    link: "https://ke.dadasoko.com/",
    tag: "dadasoko.com",
  },
  {
    name: "ECOMMERCE",
    image: require("../assets/payecommerce.png"),
    description: "Customizable Ecommerce Storefronts",
    link: "https://paysoko.store/",
    tag: "paysoko.store",
  },
  {
    name: "INFLUENCER MARKETPLACE",
    image: require("../assets/earnsoko.png"),
    description: "Where Everyone is an Influencer",
    link: "https://app.earnsoko.com/",
    tag: "earnsoko.com",
  },
  {
    name: "TICKETS",
    image: require("../assets/ticketsoko.png"),
    description: "Event Management and tickets sales at your fingertips",
    link: "https://ticketsoko.com/",
    tag: "ticketsoko.com",
  },
  {
    name: "SERVICES",
    image: require("../assets/worksoko.png"),
    description: "On demand services at your convenience",
    link: "https://worksoko.com/",
    tag: "worksoko.com",
  },
  {
    name: "FOOD SELLING",
    image: require("../assets/mealsoko.png"),
    description: "Buy and Sell Home cooked food",
    link: "https://mealsoko.com/",
    tag: "mealsoko.com",
  },
];

const Solution = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}>PAYSOKO PAYMENTS SOLUTIONS</Text>
          <View style={styles.spacer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cover}>
                <Text style={styles.big}>PAYMENT SPLITS.</Text>
                <Text style={styles.small}>
                  Now easily split incoming payments to individual accounts,
                  make vendor payouts, manage marketplace money flow and much
                  more using powerful APIs.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>ECOMMERCE.</Text>
                <Text style={styles.small}>
                  Start your business online.Sell through Whatsapp and
                  Instagram.Easy checkout process for your customers.Hire a Soko
                  Agent to help you with your online store.Move your business
                  online.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>PAYMENT LINKS.</Text>
                <Text style={styles.small}>
                  Get paid immediately via payment links sent through sms, email
                  or messenger chat apps .Easily create payment links for
                  payments.Automate collections.Create unlimited links
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>PAYMENT SEAMLESS API.</Text>
                <Text style={styles.small}>
                  Create a seamless payment solution from your platform through
                  our sophisticated easy to implement API.Automate the
                  onboarding process through our API. We collect, verify your
                  customer information for you.
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity>
              <LinearGradient
                style={styles.btn}
                colors={["#171347", "#152745", "#2374f7"]}
              >
                <Text style={styles.textBtn}>Get started today for free</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <Text style={styles.header}>PAYSOKO ECOMMERCE SOLUTIONS</Text>
          <View style={styles.covered}>
            <Text style={styles.big}>COLLABORATIVE SELLING</Text>
            <Text style={styles.small}>
              With PaySoko Collaborative Selling solution, two or more
              businesses work together to sell products or services to their
              customers, often with the goal of expanding their reach,
              increasing sales, and providing a better customer experience. The
              business collaborate in different areas including but not limited
              to:
            </Text>
            <View style={styles.spacer}>
              <Text style={styles.bigs}>Co-Creation of Products:</Text>
              <Text style={styles.small}>
                Businesses collaborate to create new products or services that
                combine their respective expertise or capabilities. This
                approach can result in innovative products that meet a broader
                range of customer needs.
              </Text>
            </View>
            <View style={styles.spacer}>
              <Text style={styles.bigs}>Cross-Selling:</Text>
              <Text style={styles.small}>
                Businesses partner to sell complementary products or services to
                each other's customers. This approach can help businesses reach
                new audiences and provide added value to their existing
                customers.
              </Text>
            </View>
          </View>
          <View style={styles.spacer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.cover}>
                <Text style={styles.big}>E-COMMERCE</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce enables businesses to create an online store
                  and sell products or services online. It offers a variety of
                  features such as customizable themes, payment processing, and
                  shipping management, among others.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>MULTI-CHANNEL SELLING</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce enables businesses to sell their products
                  across multiple channels, including social media platforms,
                  marketplaces, and their own online store. This allows
                  businesses to expand their reach and sell their products where
                  their customers are.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>PAYMENT PROCESSING</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce provides payment processing solutions,
                  including its own payment facilitator called PaySoko Payments.
                  PaySoko Payments provides ability to take payments online,
                  sell products to multiple people and collaborate with
                  different businesses to sell products and services.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>INVENTORY MANAGEMENT</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce allows businesses to manage their inventory
                  through its platform. This includes features such as tracking
                  inventory levels, creating purchase orders, and setting up low
                  stock alerts, among others.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>SHIPPING AND FULFILLMENT</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce provides shipping and fulfillment solutions
                  that allow businesses to manage their shipping and delivery
                  processes. This includes features such as shipping rate
                  calculators, label printing, and order tracking, among others.
                </Text>
              </View>
              <View style={styles.cover}>
                <Text style={styles.big}>ANALYTICS AND REPORTING</Text>
                <Text style={styles.small}>
                  PaySoko eCommerce provides analytics and reporting tools that
                  enable businesses to track their sales and performance. This
                  includes features such as sales reports, customer reports, and
                  traffic analytics, among others.
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.covered}>
            <Text style={styles.big}>MARKETING AND LOYALTY PROGRAMS.</Text>
            <Text style={styles.small}>
              PaySoko eCommerce offers a variety of marketing and Loyalty
              Program tools like SSNAPP by SMG, Inc. These prorgrams help
              businesses drive traffic to their online store and increase sales.
              These tools include email marketing, social media integration,
              Gamification, Social Contests, Referral Programs, and Influencer
              marketing programs.
            </Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              style={styles.btn}
              colors={["#171347", "#152745", "#2374f7"]}
            >
              <Text style={styles.textBtn}>Get started today for free</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.header}>PAYSOKO SYSTEMS EBUSINESS SOLUTIONS</Text>
          <View style={styles.spacer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {businesses.map((business) => (
                <SolCard item={business} key={business.name} />
              ))}
            </ScrollView>
          </View>
          <View style={styles.bottom} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Solution;

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
  big: {
    fontSize: 24,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  bigs: {
    fontSize: 14,
    color: "#171347",
    fontWeight: "500",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "600",
  },
  cover: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: width * 0.7,
    marginRight: 15,
  },
  covered: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginVertical: 10,
  },
  spacer: {
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#171347",
    width: width * 0.8,
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textBtn: {
    color: "#FFFFFF",
  },
  bottom: {
    marginBottom: 30,
  },
});

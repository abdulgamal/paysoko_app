import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import Card from "../components/Card";
import { height, width } from "../constants";
import Paper from "../components/Paper";
import Carousels from "../components/Carousel";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.big}>Payments and eBusiness Infrastructure</Text>
          <Text style={styles.small}>
            PaySoko Payments and eBusiness solutions gives your brand access to
            modern commerce and modern digital payments solutions, offering your
            businesses new opportunities for growth and success.
          </Text>
        </View>
        <View style={styles.logs}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.sign}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnd}>
            <Text style={styles.get}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
        >
          <Card
            name="Collaborative Selling"
            description="At PaySoko the the power of collaboration drives online selling success. Our platform connects sellers from around the world, providing a seamless, efficient, and collaborative selling experience."
          />
          <Card
            name="Easy Payments Solutions"
            description="PaySoko provides digital wallets and accepts multiple forms of payment, including mobile money and credit cards"
          />
          <Card
            name="eBusiness on your finger tips"
            description="Start, grow and manage your online storefronts through our all-in-one commerce platform that makes it super easy"
          />
          <Card
            name="Security is our top priority"
            description="We use the latest technology and security measures to keep your store and your customer's data safe."
          />
        </ScrollView>
        <View style={styles.spacer}>
          <Image
            source={require("../assets/modern.png")}
            resizeMode="contain"
            style={styles.img}
          />
          <View style={styles.spacer}>
            <Text style={styles.big}>
              Modern eBusiness solutions for all businesses
            </Text>
            <Text style={styles.small}>
              By utilizing eBusiness, companies can reach a larger customer
              base, improve their operational efficiency, and increase their
              bottom line. Our payment infrastructure facilitates the ability to
              accept different type of payments and open up store fronts to sell
              products and services to your customers regardless of their
              geolocation Our services cater to both businesses and consumers,
              offering solutions for both B2B and B2C needs.
            </Text>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            source={require("../assets/paysoko.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/smg.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/dadasoko.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/earnsoko.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/payecommerce.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/dukaApp.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/ticketsoko.png")}
            resizeMode="contain"
            style={styles.feature}
          />
          <Image
            source={require("../assets/worksoko.png")}
            resizeMode="contain"
            style={styles.feature}
          />
        </ScrollView>
        <View style={styles.spacer}>
          <View style={styles.center}>
            <Text style={styles.bigc}>
              Payments and Modern eBusiness Solutions
            </Text>
            <Text style={styles.smallc}>
              Our mission is to empower entrepreneurs and businesses of all
              sizes to succeed in the world of eBusiness.
            </Text>
          </View>
          <ScrollView style={styles.sols}>
            <Paper
              icon={
                <Ionicons name="md-home-outline" size={24} color="#2A52F0" />
              }
              description="Ecommerce Store fronts"
            />
            <Paper
              icon={<Ionicons name="md-shuffle" size={24} color="#2A52F0" />}
              description="Accept mPesa Online"
            />
            <Paper
              icon={<FontAwesome name="money" size={24} color="#2A52F0" />}
              description="Split Payments"
            />
            <Paper
              icon={<Feather name="link" size={24} color="#2A52F0" />}
              description="Payment links"
            />
            <Paper
              icon={<Ionicons name="mail-outline" size={24} color="#2A52F0" />}
              description="Invoice Payment"
            />
            <Paper
              icon={
                <Ionicons name="wallet-outline" size={24} color="#2A52F0" />
              }
              description="Donations/Crowd funding"
            />
          </ScrollView>
        </View>
        <View style={styles.spacer}>
          <Image
            source={require("../assets/revs.png")}
            resizeMode="contain"
            style={styles.img}
          />
          <View style={styles.spacer}>
            <Text style={styles.big}>
              What our happy client say about our services
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Carousels />
            </ScrollView>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.bigc}>
            Experience hassle-free payments with PaySoko
          </Text>
          <TouchableOpacity>
            <LinearGradient
              style={styles.butend}
              colors={["#171347", "#152745", "#2374f7"]}
            >
              <Text style={styles.smallc}>Sign Up for Free</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
    marginVertical: 10,
  },
  big: {
    fontSize: 24,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 10,
  },
  bigc: {
    fontSize: 24,
    color: "#171347",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  small: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "600",
  },
  smallc: {
    fontSize: 14,
    color: "#9598A2",
    fontWeight: "600",
    textAlign: "center",
  },
  logs: {
    flexDirection: "row",
    marginVertical: 20,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: "#171347",
    borderWidth: 1.5,
    borderRadius: 9,
    marginRight: 20,
  },
  btnd: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 9,
    backgroundColor: "#C6DDFC",
    marginRight: 20,
  },
  sign: {
    fontWeight: "600",
  },
  get: {
    color: "blue",
  },
  scroll: {
    marginVertical: 10,
  },
  img: {
    width: "100%",
    height: height * 0.5,
  },
  spacer: {
    marginVertical: 10,
  },
  feature: {
    width: width * 0.3,
    height: height * 0.1,
    marginRight: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  sols: {
    height: height * 0.4,
    marginVertical: 20,
  },
  bottom: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  butend: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#171347",
    marginTop: 10,
    borderRadius: 10,
  },
});

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, FontAwesome5, Feather } from "@expo/vector-icons";
import {
  Balance,
  ChargeBacks,
  Charges,
  Disputes,
  Drives,
  Home,
  Links,
  Loans,
  MarketPlace,
  Payments,
  Plan,
  Profile,
  Single,
  Solution,
  Subscribers,
  Transactions,
  WebIntegration,
  Withdrawal,
} from "./screens";
import CustomDrawer from "./components/CustomDrawer";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="withdrawal"
        component={Withdrawal}
        options={{
          title: "Request Withdrawal",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "arrow-up" : "arrow-up-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="balance"
        component={Balance}
        options={{
          title: "Top up Balance",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "arrow-down" : "arrow-down-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="dispute"
        component={Disputes}
        options={{
          title: "Disputes",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "flag" : "flag-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="subscribers"
        component={Subscribers}
        options={{
          title: "Subscribers",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="transactions"
        component={Transactions}
        options={{
          title: "Transactions",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="charges"
        component={Charges}
        options={{
          title: "Charges",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="payments"
        component={Payments}
        options={{
          title: "Split Payments",
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? "percent" : "percent"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="back"
        component={ChargeBacks}
        options={{
          title: "Charge Backs",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "refresh" : "refresh-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="loan"
        component={Loans}
        options={{
          title: "My Loans",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name={focused ? "money-bill" : "money-bill-alt"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="links"
        component={Links}
        options={{
          title: "Payment Links",
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? "link" : "link"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="drives"
        component={Drives}
        options={{
          title: "Contribution Drives",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "hand-right" : "hand-right-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="single"
        component={Single}
        options={{
          title: "Single Charge",
          drawerIcon: ({ focused, color, size }) => (
            <Feather
              name={focused ? "link" : "link"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="plan"
        component={Plan}
        options={{
          title: "Plan",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "md-layers" : "md-layers-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="web"
        component={WebIntegration}
        options={{
          title: "Website Integration",
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "md-layers" : "md-layers-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#171347",
          tabBarInactiveTintColor: "gray",
        }}
        component={Home}
      />
      <Tab.Screen
        name="Solution"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "expand" : "expand-outline"}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#171347",
          tabBarInactiveTintColor: "gray",
        }}
        component={Solution}
      />
      <Tab.Screen
        name="Market"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#171347",
          tabBarInactiveTintColor: "gray",
        }}
        component={MarketPlace}
      />
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#171347",
          tabBarInactiveTintColor: "gray",
        }}
        component={MyDrawer}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Navigator;

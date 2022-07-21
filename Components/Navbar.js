import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { navigate } from "../helpers/RootNavigation";
import { StackActions } from "@react-navigation/native";

const Navbar = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "white",
      }}
    >
      <View>
        <Image
          style={{
            width: 100,
            height: 30,
          }}
          source={require("../assets/kfitLogo.png")}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginRight: 20,
          }}
        >
          <Icon size={30} name="information-circle-outline" />
        </View>
        <TouchableHighlight
          style={{
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
            }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1658225462269-7686f741045a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                width: 40,
                height: 40,
              }}
              style={{
                borderRadius: 50,
              }}
            />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({});

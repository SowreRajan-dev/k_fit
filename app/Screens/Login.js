import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  0;
  return (
    <>
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "white",
        }}
      >
        <ImageBackground source={require("../../assets/bgPic.png")}>
          <View style={styles.logoContainer}>
            <Image source={require("../../assets/kfitLogo.png")} />
          </View>
          <KeyboardAvoidingView style={styles.formContainer}>
            <ScrollView contentContainerStyle={styles.center}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#6327FF"}
                style={styles.textInputBox}
                onChangeText={(email) => setEmail(email)}
              />
              <TextInput
                placeholder="Password"
                style={styles.textInputBox}
                placeholderTextColor={"#6327FF"}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
              <View>
                <Text style={styles.forgetPassword}>Forget Password?</Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              New user?{" "}
              <Text
                style={{
                  color: "#6327FF",
                  fontSize: 18,
                  fontWeight: "600",
                }}
                onPress={() => navigation.navigate("Register")}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  textInputBox: {
    flex: 1,
    width: 270,
    borderColor: "#6327FF",
    padding: 20,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  forgetPassword: {
    textAlign: "right",
    marginVertical: 30,
    color: "#6327FF",
    textDecorationLine: "underline",
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#6327FF",
    width: 160,
    height: 50,
  },
  loginText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Login;

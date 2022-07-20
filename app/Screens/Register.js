import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  return (
    <KeyboardAvoidingView>
      <ImageBackground source={require("../../assets/bgPic.png")}>
        <View
          style={{
            backgroundColor: "#fff",
            height: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flex: 0.5,
              justifyContent: "center",
            }}
          >
            <Image source={require("../../assets/kfitLogo.png")} />
          </View>
          <ScrollView
            style={styles.formContainer}
            contentContainerStyle={styles.center}
          >
            <View>
              <Text styles={styles.inputText}>NAME :</Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={(name) => setName(name)}
              />
            </View>
            <View>
              <Text styles={styles.inputText}>AGE :</Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={(age) => setAge(age)}
              />
            </View>
            <View>
              <Text styles={styles.inputText}>PHONE :</Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={(phone) => setPhone(phone)}
              />
            </View>
            <View>
              <Text styles={styles.inputText}>HEIGHT :</Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={(height) => setHeight(height)}
              />
            </View>
            <View>
              <Text styles={styles.inputText}>WEIGHT :</Text>
              <TextInput
                style={styles.inputContainer}
                onChangeText={(weight) => setWeight(weight)}
              />
            </View>
          </ScrollView>
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    flex: 1,
    height: "100%",
  },
  center: {
    alignItems: "center",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#E5E5E54D",
    backgroundColor: "#E5E5E54D",
    borderRadius: 10,
    alignItems: "center",
    width: 270,
    height: 40,
    marginTop: 10,
    padding: 10,
  },
  inputText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
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

export default Register;

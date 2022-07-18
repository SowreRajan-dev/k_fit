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
import React from "react";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView>
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
            <TextInput style={styles.inputContainer} />
          </View>
          <View>
            <Text styles={styles.inputText}>AGE :</Text>
            <TextInput style={styles.inputContainer} />
          </View>
          <View>
            <Text styles={styles.inputText}>PHONE :</Text>
            <TextInput style={styles.inputContainer} />
          </View>
          <View>
            <Text styles={styles.inputText}>HEIGHT :</Text>
            <TextInput style={styles.inputContainer} />
          </View>
          <View>
            <Text styles={styles.inputText}>WEIGHT :</Text>
            <TextInput style={styles.inputContainer} />
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

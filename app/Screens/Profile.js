import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import firebase from "../../firebase";

const Profile = ({ navigation }) => {
  const getProfile = async () => {
    const currUser = await firebase.auth().currentUser.uid;
    console.log(currUser);
    await firebase.firestore().collection("User").doc(currUser).get();
  };

  const onSignOut = async () => {
    try {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("User signed out!"));
    } catch (err) {
      console.error(err);
    }
    console.log("pushing in");
    navigation.push("Login");
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View
      style={{
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Image
          style={{ width: 130, height: 45, marginBottom: 50 }}
          source={require("../../assets/kfitLogo.png")}
        />
        <View style={{ alignItems: "center" }}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1658225462269-7686f741045a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              width: 160,
              height: 160,
            }}
            style={{
              borderRadius: 100,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: "80%",
          alignItems: "flex-start",
          borderRadius: 20,
          padding: 40,

          justifyContent: "space-evenly",
          height: "50%",

          marginVertical: 30,
        }}
      >
        <Text style={styles.outerProfileTitle}>
          <Text style={styles.profileTitles}>Name:</Text> Varsha
        </Text>
        <Text>
          <Text style={styles.profileTitles}>Age:</Text> 23
        </Text>
        <Text>
          <Text style={styles.profileTitles}>Phone:</Text> 9656874123
        </Text>
        <Text>
          <Text style={styles.profileTitles}>Height:</Text> 158 cm
        </Text>
        <Text>
          <Text style={styles.profileTitles}>Weight:</Text> 55 kg
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            elevation: 3,
            backgroundColor: "#6327FF",
            width: 160,
            height: 50,
          }}
          onPress={onSignOut}
        >
          <Text style={{ color: "white", fontSize: 14 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileTitles: {
    fontSize: 14,
    color: "#5D26ED",
    marginLeft: 20,
  },
});

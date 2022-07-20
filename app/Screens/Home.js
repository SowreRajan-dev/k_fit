import { View, Text, Button, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Navbar from "../../Components/Navbar";
import ProgressBar from "../../Components/ProgressBar";
import RateCards from "../../Components/RateCards";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#E5E5E5" }}>
        <Navbar />
        <View>
          <ProgressBar />
          <Button
            title="Go to login page"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            title="Go to Profile page"
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
        <View style={styles.cardContainer}>
          <View>
            <RateCards
              pastDaysCount={7}
              title="HeartPoints"
              typeOfCard={"HeartPoints"}
              values={0}
            />
          </View>
          <View>
            <RateCards
              pastDaysCount={7}
              title="Steps"
              typeOfCard={"Steps"}
              values={0}
            />
          </View>
          <View>
            <RateCards
              pastDaysCount={7}
              title="Temperature"
              typeOfCard={"Temperature"}
              values={0}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginLeft: 20,
  },
});

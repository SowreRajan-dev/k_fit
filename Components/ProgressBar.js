import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import * as Progress from "react-native-progress";
const ProgressBar = () => {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <View style={styles.progressBarContainer}>
        <View>
          <Progress.Circle
            size={250}
            progress={0.5}
            animated={true}
            color={"#00EBCF"}
            thickness={15}
            borderWidth={0}
            unfilledColor={"#E1FFFB"}
          />
        </View>
        <View style={styles.innerProgressBar}>
          <Progress.Circle
            size={150}
            progress={0.5}
            animated={true}
            borderWidth={0}
            color={"#896EF3"}
            thickness={12}
            unfilledColor={"#E9E4FF"}
          />
        </View>
        <View style={styles.progressBarValues}>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "#00EBCF" }}>
            50
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#5D26ED" }}>
            245
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/Icons/heartRate.png")}
              style={{ marginRight: 5 }}
            />
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#6F6F6F" }}>
              Heart Pts
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/Icons/footStep.png")}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 14, fontWeight: "500", color: "#6F6F6F" }}>
              Steps
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View>
            <Text style={styles.notedValue}>708</Text>
            <Text>Cal</Text>
          </View>
          <View>
            <Text style={styles.notedValue}>0.66</Text>
            <Text>Km</Text>
          </View>
          <View>
            <Text style={styles.notedValue}>14</Text>
            <Text>Move Min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  progressBarContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  innerProgressBar: {
    position: "absolute",
  },
  progressBarValues: {
    position: "absolute",
  },
  notedValue: {
    color: "#FF6B00",
    fontSize: 14,
    fontWeight: "500",
  },
});

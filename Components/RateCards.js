import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import VerticalBarGraph from "@chartiful/react-native-vertical-bar-graph";
const RateCards = ({ title, pastDaysCount, typeOfCard, values }) => {
  const config = {
    hasXAxisBackgroundLines: false,
  };
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 20,
        width: "90%",
        height: 150,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        position: "relative",
      }}
    >
      <View style={styles.valueContainer}>
        <View
          style={{
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#4F4F4F",
              fontSize: 15,
              fontWeight: "500",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#979797",
              fontSize: 10,
            }}
          >
            Last {pastDaysCount} days
          </Text>
        </View>
        <View>
          {typeOfCard === "HeartPoints" ? (
            <View style={styles.pointsText}>
              <Text style={{ color: "#007C66" }}>
                <Text style={{ fontSize: 26, fontWeight: "bold" }}>0</Text> pts
              </Text>
            </View>
          ) : typeOfCard === "Steps" ? (
            <View>
              <Text style={{ color: "#007C66", fontWeight: "bold" }}>1023</Text>
            </View>
          ) : (
            <View>
              <Text style={{ color: "#007C66", fontWeight: "bold" }}>
                32 °C
              </Text>
            </View>
          )}
          <Text style={{ color: "#007C66" }}>Today</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 10,
          position: "absolute",
        }}
      >
        <VerticalBarGraph
          data={[20, 45, 28, 80, 99, 43, 50]}
          labels={["T", "W", "T", "F", "S", "S", "M"]}
          width={200}
          height={120}
          barRadius={5}
          barColor={"#6327FF"}
          barWidthPercentage={0.65}
          baseConfig={config}
          style={styles.chart}
        />
      </View>
    </View>
  );
};

export default RateCards;

const styles = StyleSheet.create({
  valueContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  pointsText: {},
  chart: {
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 20,
    borderRadius: 20,
    width: 240,
    left: 70,
    bottom: 0,
  },
});

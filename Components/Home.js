import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import React from "react";

const Home = () => {
  return (
    <View
      style={{ height: "40%", alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ color: "#050", fontSize: 50, textAlign: "center" }}>
        Shops
      </Text>
      <Button
        onPress={() => alert("Flutter > React Native")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

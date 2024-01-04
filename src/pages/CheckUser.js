import {
  faCompass,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function CheckUser({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <StatusBar hidden={false} backgroundColor={"transparent"} barStyle={"dark-content"} translucent />

      <View style={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        height: "100%"
      }}
      >
        <Image
          style={{ height: 150, width: 150, marginTop: 60 }}
          source={require("../../assets/images/small-logo.png")}
          alt="home-image"
        />

        <View style={styles.btnContainer}>

          <Text style={{ color: "white", fontSize: 30, fontWeight: "500" }}>Welcome to,</Text>

          <Text style={{ color: "black", fontSize: 45, fontWeight: "bold" }}>CEHPONT</Text>

          <View style={{ height: "5%" }}></View>

          <Pressable style={[styles.btn, { backgroundColor: "white" }]} onPress={() => navigation.navigate("check-student")}>
            <FontAwesomeIcon style={{ color: "black", }} size={20} icon={faUserGraduate} />
            <View style={styles.gapH}></View>
            <Text style={[styles.btnText, { color: "black" }]}> Continue  a Student </Text>
          </Pressable>

          <View style={styles.gapV}></View>

          <Pressable style={[styles.btn, { backgroundColor: "white" }]} onPress={() => navigation.navigate("check-client")}>
            <FontAwesomeIcon style={{ color: "black", }} size={20} icon={faUserTie} />
            <View style={styles.gapH}></View>
            <Text style={[styles.btnText, { color: "black" }]}> Continue  a Client </Text>
          </Pressable>

          <View style={styles.gapV}></View>

          <Text style={[styles.btnText]}>- or -</Text>

          <View style={styles.gapV}></View>

          <Pressable style={[styles.btn, { backgroundColor: "black" }]} onPress={() => navigation.navigate("explore")}>
            <FontAwesomeIcon style={{ color: "#D4C00B" }} icon={faCompass} />
            <View style={styles.gapH}></View>
            <Text style={[styles.btnText, { color: "white" }]}> Explore CEHPONT </Text>
          </Pressable>

        </View>


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0c000"
  },
  gapH: { width: "2%" },
  gapV: { height: "2%" },

  btnContainer: {
    width: "100%",
    justifyContent: "center",
  },
  btn: {
    width: "100%",
    borderRadius: 8,
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 15,
  }
});

export default CheckUser;

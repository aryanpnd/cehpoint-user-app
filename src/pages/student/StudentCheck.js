import { faArrowLeft, faCompass, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Button, Image } from "native-base";
import React from "react";
import { Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function StudentCheck({ navigation }) {
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
      <StatusBar
        hidden={false}
        backgroundColor={"transparent"}
        barStyle={"dark-content"}
        translucent
      />

      <View style={{ alignItems: "center", paddingHorizontal: 20, height: "100%" }}>

        <View style={styles.navbar}>
          <Pressable onPress={() => navigation.goBack()}><FontAwesomeIcon icon={faArrowLeft} size={20} /></Pressable>
          <Text style={{ fontWeight: "500", fontSize: 20 }}>Student Login</Text>
          <View></View>
        </View>


        <View style={styles.btnContainer}>

          <Pressable style={[styles.btn, { backgroundColor: "white" }]} onPress={() => navigation.navigate("student-que1")}>
            <FontAwesomeIcon style={{ color: "black" }} icon={faUserGraduate} />
            <View style={styles.gapH}></View>
            <Text style={[styles.btnText, { color: "black" }]}> Start learning </Text>
          </Pressable>

          <Text style={{ paddingVertical: 20, fontWeight: "600", fontSize: 15 }}>
            or
          </Text>

          <Pressable style={[styles.btn, { backgroundColor: "black" }]} onPress={() => navigation.navigate("old-student-form")}>
            <FontAwesomeIcon style={{ color: "white" }} icon={faUserGraduate} />
            <View style={styles.gapH}></View>
            <Text style={[styles.btnText, { color: "white" }]}> Login as a Student </Text>
          </Pressable>

        </View>

          <TouchableOpacity style={{}} onPress={() => navigation.navigate("from-prospect-id")}>
            <Text style={{ color: "white",fontWeight:"400",fontSize:15,textDecorationLine:"underline", }}> Already submitted the form ?</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f0c000"
  },
  gapH: { width: "2%" },
  gapV: { height: "2%" },
  navbar: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  btnContainer: {
    width: "100%",
    justifyContent: "center",
    height:"70%",
    alignItems:"center"
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

export default StudentCheck;

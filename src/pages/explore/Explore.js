import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HamburgerIcon, Menu, ScrollView } from "native-base";
import React, { useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import JobsAndIntern from "./JobsAndIntern";

function Explore({ navigation }) {
  const insets = useSafeAreaInsets();
  // const refRBSheet = useRef(null);
  const modalizeRef = useRef(null);
  const animated = useRef(new Animated.Value(0)).current;

  const onOpen = () => {
    modalizeRef.current?.open();
  };

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
      <ScrollView
        style={{
          position: "relative",
          paddingHorizontal: 20,
          marginBottom: 51,
        }}
      >
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.navigate("check-user")}
        >
          <FontAwesomeIcon
            style={{
              color: "black",
            }}
            icon={faArrowLeftLong}
            size={30}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <View style={{ width: "30%" }}>
            <Image
              style={{ height: 70, width: 70 }}
              source={require("../../../assets/images/small-logo.png")}
              alt="home-image"
            />
          </View>
          <View style={{ width: "60%", marginTop: 20 }}>
            <Text style={{ fontWeight: "600", fontSize: 20 }}>
              Explore cehpoint
            </Text>
          </View>
          <View style={{ width: "10%", marginTop: 20 }}>
            <Menu
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    <HamburgerIcon size={8} />
                  </Pressable>
                );
              }}
              style={{ paddingHorizontal: 20, paddingVertical: 30 }}
            >
              <TouchableOpacity
                style={styles.menu}
                // onPress={() => navigation.navigate("login")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/demo-class.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Demo classes</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                // onPress={() => navigation.navigate("login")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/free-service.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Free service</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                // onPress={() => navigation.navigate("login")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/case-studies.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Case studies</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate("community-pool")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/post-job-intern.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Post job & internship</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate("jobs-and-intern")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/get-job-intern.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Get job & internship</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate("job-category")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/get-job-intern.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Job category</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menu}
                onPress={() => navigation.navigate("login")}
              >
                <View style={styles.menu_img}>
                  <Image
                    source={require("../../../assets/images/login.png")}
                    alt="free-serveic"
                  />
                </View>
                <View>
                  <Text style={styles.menu_text}>Log in</Text>
                </View>
              </TouchableOpacity>
            </Menu>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          w="100%"
        >
          <Image
            style={{
              borderRadius: 10,
              width: "100%",
              marginTop: 10,
              position: "relative",
            }}
            source={require("../../../assets/images/image-one.png")}
            alt="image"
          />
          <Image
            source={require("../../../assets/images/play-btn.png")}
            style={{
              color: "white",
              position: "absolute",
              top: "42%",
              left: "45%",
            }}
            alt="free-serveic"
          />

          <Text style={styles.description}>Video description</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          w="100%"
        >
          <Image
            style={{
              borderRadius: 10,
              width: "100%",
              marginTop: 10,
              position: "relative",
            }}
            source={require("../../../assets/images/image-two.png")}
            alt="image"
          />
          <Image
            source={require("../../../assets/images/play-btn.png")}
            style={{
              color: "white",
              position: "absolute",
              top: "42%",
              left: "45%",
            }}
            alt="free-serveic"
          />
          <Text style={styles.description}>Video description</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          w="100%"
        >
          <Image
            style={{
              borderRadius: 10,
              width: "100%",
              marginTop: 10,
              position: "relative",
            }}
            source={require("../../../assets/images/image-three.png")}
            alt="image"
          />
          <Image
            source={require("../../../assets/images/play-btn.png")}
            style={{
              color: "white",
              position: "absolute",
              top: "42%",
              left: "45%",
            }}
            alt="free-serveic"
          />
          <Text style={styles.description}>Video description</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
          w="100%"
        >
          <Image
            style={{
              borderRadius: 10,
              width: "100%",
              marginTop: 10,
              position: "relative",
            }}
            source={require("../../../assets/images/image-four.png")}
            alt="image"
          />
          <Image
            source={require("../../../assets/images/play-btn.png")}
            style={{
              color: "white",
              position: "absolute",
              top: "42%",
              left: "45%",
            }}
            alt="free-serveic"
          />
          <Text
            style={{
              fontSize: 18,
              paddingLeft: 5,
              paddingTop: 5,
              fontWeight: "700",
              paddingBottom: 30,
            }}
          >
            Video description
          </Text>
        </View>
      </ScrollView>
      {/* <Button
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
        w="100%"
        size="lg"
        shadow={9}
        onPress={() => refRBSheet.current?.open()}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            textTransform: "capitalize",
          }}
        >
          explore jobs & internship
        </Text>
      </Button> */}

      <TouchableOpacity onPress={onOpen}>
        <Text>jobs andsdsdd dsds intern</Text>
      </TouchableOpacity>
      

      {/* <RBSheet
        ref={refRBSheet}
        height={700}
        closeOnDragDown={true}
        closeOnPressMask={false}
        openDuration={500}
        closeDuration={500}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
          container: {
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            paddingTop: 20,
          },
        }}
      >
        <ScrollView>
          <JobsAndIntern />
        </ScrollView>
      </RBSheet> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 5,
    fontWeight: "700",
  },
  menu: { flexDirection: "row", flexWrap: "wrap", paddingVertical: 10 },
  menu_text: {
    fontSize: 14,
    fontWeight: "600",
  },
  menu_img: {
    width: "15%",
    display: "flex",
    justifyContent: "center",
  },
});

export default Explore;

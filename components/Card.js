import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { state } from "../constants/colors";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const users = <FontAwesome5 name={"users"} color="#000" size={18} />;
const chat = <FontAwesome5 name={"comment"} color="#000" size={18} />;
const ellipsis = <FontAwesome5 name={"ellipsis-h"} color="#000" size={18} />;
const signout = <FontAwesome5 name={"sign-out-alt"} color="#000" size={18} />;
const randNum = () => Math.floor(Math.random() * (300 - 10 + 1)) + 10;
const Card = (props) => {
  const [cardWidth, setCardWidth] = useState(
    Dimensions.get("window").width > 430 ? "30%" : "45%"
  );

  const updateLayout = () => {
    setCardWidth(Dimensions.get("window").width > 430 ? 200 : 180);
  };
  useEffect(() => {
    console.log("screen size", Dimensions.get("window").width);
    Dimensions.addEventListener("change", updateLayout);

    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, [cardWidth]);
  return (
    <View style={{ ...styles.main, width: cardWidth }}>
      <View style={styles.avatarContainer}>
        <Image
          style={{
            ...styles.avatar,
            borderColor:
              props.data.agentState === "Available"
                ? state.available
                : state.idle,
          }}
          source={{
            uri: props.data.picture + randNum(),
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.name}>
        <Text style={{ fontSize: 18 }}>{props.data.name}</Text>
      </View>
      <View style={styles.other}>
        <Text>({props.data.extension})</Text>
        <Text>
          {props.data.agentState} {props.data.timeInState}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity>
          <View style={styles.roundButton}>{users}</View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.roundButton}>{chat}</View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.roundButton}>
          <MaterialCommunityIcons name="location-exit" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.roundButton}>{ellipsis}</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    margin: 5,
  },
  avatarContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    overflow: "hidden",
    borderWidth: 1,
    padding: 10,
  },

  name: {
    alignItems: "center",
    padding: 5,
    fontFamily: "open-sans-bold",
  },
  other: {
    justifyContent: "center",
    alignItems: "center",
  },
  actionContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },

  roundButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: 5,
    borderRadius: 100,
    backgroundColor: "#E9E4E4",
    alignItems: "center",
  },
});

export default Card;

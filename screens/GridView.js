import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Pressable,
  Button,
} from "react-native";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { data as mockdata } from "../mocks/agents";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./styles";


const filter = <FontAwesome5 name={"filter"} color="#000" size={18} />;

 const GridView = () => {
    const [availableWidth, setAvailableWidth] = useState();
    const [availableHeight, setAvailableHeight] = useState();
    const updateLayout = () => {
      setAvailableWidth(Dimensions.get("window").width);
      setAvailableHeight(Dimensions.get("window").height);
    };
    useEffect(() => {
      Dimensions.addEventListener("change", updateLayout);
  
      return () => {
        Dimensions.removeEventListener("change", updateLayout);
      };
    });    
 

  const [appWidth, setAppWidth] = useState(Dimensions.get("window").width);
  const [appHeight, setAppHeight] = useState(Dimensions.get("window").height);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(mockdata);
  const [filterParams, setFilterParams] = useState("");

  Dimensions.addEventListener("change", (e) => {
    setAppWidth(e.window.width);
    setAppHeight(e.window.height);
  });

  const applyFilter = (param) => {
    if(param.cancel) {
      setModalVisible(false);
      return;
    }
    setFilterParams(JSON.stringify(param));
    setData(
      mockdata.filter((d) => {
        if (param.teamName === "All" && param.agentState === "All") {
          return true;
        } else if (
          d.teamName === param.teamName &&
          d.agentState === param.agentState
        ) {
          return true;
        } else if (param.teamName === "All" && param.agentState !== "All") {
          return d.agentState === param.agentState;
        } else if (param.agentState === "All" && param.teamName !== "All") {
          return d.teamName === param.teamName;
        }
      })
    );
    setModalVisible(false);
  };

  return (
    <View style={{width: availableWidth}}>
      <View style={styles.toolbar}>
        <View style={styles.filterContainer}>
          <Text>{filterParams}</Text>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            {filter}
          </Pressable>
        </View>
      </View>

      <Filter visible={modalVisible} applyFilter={applyFilter} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {data.map((d) => {
          return <Card key={d._id} data={d}></Card>;
        })}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};

export default GridView;
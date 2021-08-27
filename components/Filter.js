import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import { Picker } from "@react-native-community/picker";
import { data } from "../mocks/agents";

const teamSet = new Set();
data.forEach((d) => {
  teamSet.add(d.teamName);
});

const Filter = (props) => {
  const [selectedTeam, setSelectedTeam] = useState("All");
  const [selectedAgentState, setSelectedAgentState] = useState("All");

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={false} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.teamContainer}>
              <Picker
                style={styles.picker}
                mode="dropdown"
                selectedValue={selectedTeam}
                itemStyle={styles.itemStyle}
                onValueChange={(itemValue) => setSelectedTeam(itemValue)}
              >
                <Picker.Item label="All" value="All" />
                {Array.from(teamSet).map((v) => (
                  <Picker.Item key={v} label={v} value={v} />
                ))}
              </Picker>
              <Picker
                style={styles.picker}
                mode="dropdown"
                selectedValue={selectedAgentState}
                itemStyle={styles.itemStyle}
                onValueChange={(itemValue) => setSelectedAgentState(itemValue)}
              >
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Available" value="Available" />
                <Picker.Item label="Idle" value="Idle" />
              </Picker>
            </View>
            <View style={styles.buttons}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => props.applyFilter({cancel: true})}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() =>
                  props.applyFilter({
                    teamName: selectedTeam,
                    agentState: selectedAgentState,
                  })
                }
              >
                <Text style={styles.textStyle}>Apply</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  modalView: {
    width: "90%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: "40%",
  },
  buttonOpen: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  itemStyle: {
    fontSize: 15,
    height: 75,
    color: "black",
    textAlign: "center",
  },
  picker: {
    width: 200,
  },

  buttons: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
  },
});

export default Filter;

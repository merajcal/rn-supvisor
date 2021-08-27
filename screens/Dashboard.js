import React from "react";
import { ScrollView, StatusBar, Dimensions, Text } from "react-native";
import ScrollableTabView from "react-native-scrollable-tab-view";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import {
  data,
  contributionData,
  pieChartData,
  progressChartData,
} from "../mocks/chartData";
import "babel-polyfill";

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
    },
  },
];

export default class Dashboard extends React.Component {
  renderTabBar() {
    return <StatusBar hidden />;
  }
  render() {
    const width = Dimensions.get("window").width;
    const height = 220;
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map((chartConfig) => {
          const labelStyle = {
            color: chartConfig.color(),
            marginVertical: 10,
            textAlign: "center",
            fontSize: 16,
          };
          const graphStyle = {
            margin: 5,
            ...chartConfig.style,
          };
          return (
            <ScrollView
              key={Math.random()}
              contentContainerStyle={{
                backgroundColor: chartConfig.backgroundColor,
              }}
            >
              <LineChart
                data={data}
                width={width}
                height={height}
                chartConfig={chartConfig}
                bezier
                style={graphStyle}
              />
              <PieChart
                data={pieChartData}
                height={height}
                width={width}
                chartConfig={chartConfig}
                accessor="population"
                style={graphStyle}
              />

              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />

              <LineChart
                data={data}
                width={width}
                height={height}
                chartConfig={chartConfig}
                style={graphStyle}
              />
              
            </ScrollView>
          );
        })}
      </ScrollableTabView>
    );
  }
}

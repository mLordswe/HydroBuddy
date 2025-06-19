import React from "react";
import { Dimensions, Text, View } from "react-native";

import { BarChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function HistoryScreen() {
	const history = {
		"2025-06-17": 1000,
		"2025-06-18": 1250,
		"2025-06-19": 750,
	};

	const labels = Object.keys(history).map((date) => date.slice(5));
	const data = Object.values(history);

	return (
		<View style={{ padding: 16 }}>
			<Text style={{ fontSize: 20, marginBottom: 16 }}>Vattenhistorik</Text>
			<BarChart
				data={{
					labels,
					datasets: [{ data }],
				}}
				width={screenWidth - 32}
				height={220}
				yAxisLabel={""}
				yAxisSuffix="ml"
				chartConfig={{
					backgroundGradientFrom: "#fff",
					backgroundGradientTo: "#fff",
					decimalPlaces: 0,
					color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
					labelColor: () => "#333",
					propsForBackgroundLines: {
						strokeDasharray: "",
					},
				}}
				style={{
					borderRadius: 8,
					marginVertical: 8,
				}}
			/>
		</View>
	);
}

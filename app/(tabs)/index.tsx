import WaterLogButton from "@/components/WaterLogButton";
import { useWaterStore } from "@/storage/waterstorage";
import React from "react";
import { Text, View } from "react-native";

export default function IndexScreen() {
	const water = useWaterStore((state) => state.water);
	const goal = useWaterStore((state) => state.goal);

	return (
		<View style={{ padding: 16 }}>
			<Text>Ditt dagliga mål: {goal} ml</Text>
			<Text>Återstår att dricka idag: {water} ml</Text>

			<WaterLogButton amount={250} />
		</View>
	);
}

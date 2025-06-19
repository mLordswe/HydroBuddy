import { CircularProgressWithLabel } from "@/components/ProgressBar";
import WaterLogButton from "@/components/WaterLogButton";
import { useWaterStore } from "@/storage/waterstorage";
import React from "react";
import { Text, View } from "react-native";

export default function IndexScreen() {
	const water = useWaterStore((state) => state.water);
	const goal = useWaterStore((state) => state.goal);
	const percentRemaining = goal > 0 ? Math.max(0, ((goal - water) / goal) * 100) : 0;
	return (
		<View style={{ padding: 16, flexDirection: "column", alignItems: "center", rowGap: 30 }}>
			<CircularProgressWithLabel value={percentRemaining} />
			<Text>Ditt dagliga mål: {goal} ml</Text>
			<Text>Återstår att dricka idag: {water} ml</Text>

			<WaterLogButton amount={250} />
		</View>
	);
}

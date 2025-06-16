import { useWaterStore } from "@/storage/waterstorage";
import React, { useState } from "react";
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function SettingsScreen() {
	const [input, setInput] = useState("");
	const setGoal = useWaterStore((state) => state.setGoal);

	const handleSave = () => {
		const goal = parseInt(input, 10);
		if (!isNaN(goal)) {
			setGoal(goal);
			setInput("");
			Keyboard.dismiss(); // stänger tangentbordet när mål sparas
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={{ flex: 1, padding: 16 }}>
				<Text>Ange ditt dagliga vattenmål (ml):</Text>
				<TextInput
					inputMode="numeric"
					value={input}
					onChangeText={setInput}
					style={{
						borderWidth: 1,
						borderColor: "#ccc",
						padding: 10,
						marginVertical: 12,
						borderRadius: 8,
					}}
				/>
				<Button title="Spara mål" onPress={handleSave} />
			</View>
		</TouchableWithoutFeedback>
	);
}

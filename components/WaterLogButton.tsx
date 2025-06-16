import { useWaterStore } from "@/storage/waterstorage";
import React from "react";
import { Button } from "react-native";

interface WaterLogButtonProps {
	amount: number;
}

const WaterLogButton = ({ amount }: WaterLogButtonProps) => {
	const logWater = useWaterStore((state) => state.logWater);

	return <Button title={`Drick ${amount} ml`} onPress={() => logWater(amount)} />;
};

export default WaterLogButton;

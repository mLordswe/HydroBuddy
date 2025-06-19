import React from "react";

// Example implementation of CircularProgressWithLabel
type CircularProgressWithLabelProps = {
	value: number;
};

export const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({ value }) => {
	const radius = 90;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (value / 100) * circumference;

	return (
		<div style={{ width: 200, height: 200 }}>
			<svg width="200" height="200">
				<circle cx="100" cy="100" r={radius} stroke="#e0e0e0" strokeWidth="12" fill="none" />
				<circle
					cx="100"
					cy="100"
					r={radius}
					stroke="blue"
					strokeWidth="12"
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					transform="rotate(-90 100 100)"
				/>
				<text x="100" y="110" textAnchor="middle" fontSize="24" fontWeight="bold">
					{`${Math.round(value)}%`}
				</text>
			</svg>
		</div>
	);
};

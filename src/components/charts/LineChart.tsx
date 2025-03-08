"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

import { AnalyticsItem } from "@/types/analytics";

interface LineChartProps {
	title: string;
	description: string;
	data: AnalyticsItem[]; //Dynamic dataset
	dataKey: string; // Key for the data values (e.g "uv")
	color?: string; // Optional custom color
	textLine1?: string; // Optional text line 1
	textLine2?: string; // Optional text line 2
}

const LineChartExample: React.FC<LineChartProps> = ({ title, description, data, dataKey, color = "#8884d8", textLine1 = "", textLine2 = "" }) => {
	const chartConfig = {
		[dataKey]: {
			label: title,
			color: color,
		},
	};

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
							<CartesianGrid vertical={false} />
							<XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
							<YAxis />
							<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
							<Line dataKey={dataKey} type="natural" stroke={color} strokeWidth={2} dot={false} />
						</LineChart>
					</ChartContainer>
				</CardContent>
				<CardFooter className="flex-col items-start gap-2 text-sm">
					<div className="flex gap-2 font-medium leading-none">{textLine1}</div>
					<div className="leading-none text-muted-foreground">{textLine2}</div>
				</CardFooter>
			</Card>
		</>
	);
};

export default LineChartExample;

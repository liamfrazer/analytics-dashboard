"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

import { MonthlyAnalyticsItem } from "@/types/example-views-analytics";

interface BarChartProps {
	title: string;
	description: string;
	data: MonthlyAnalyticsItem[]; //Dynamic dataset
	dataKey: string; // Key for the data values (e.g "uv")
	dataKey2: string; // Key for the data values (e.g "lv")
	dataKeyLabel: string; // Readable name for dataKey (e.g views)
	dataKeyLabel2: string; // Readable name for dataKey (e.g views)
	color?: string; // Optional custom color
	color2?: string; // Optional custom color
	textLine1?: string; // Optional text line 1
	textLine2?: string; // Optional text line 2
}

const BarChartExample: React.FC<BarChartProps> = ({ title, description, data, dataKey, dataKey2, dataKeyLabel, dataKeyLabel2, color = "#8884d8", color2 = "#8884d8", textLine1 = "", textLine2 = "" }) => {
	const chartConfig = {
		[dataKey]: {
			label: dataKeyLabel,
			color: color,
		},
		[dataKey2]: {
			label: dataKeyLabel2,
			color: color2,
		},
	} satisfies ChartConfig;

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
				<CardContent>
					<ChartContainer config={chartConfig}>
						<BarChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
							<CartesianGrid vertical={false} />
							<XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => value.slice(0, 3)} />
							<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
							<Bar dataKey={dataKey} type="natural" fill={color} radius={4} />
							<Bar dataKey={dataKey2} type="natural" fill={color2} radius={4} />
						</BarChart>
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

export default BarChartExample;

"use client";

import * as React from "react";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { DailyAnalyticsItem } from "@/types/example-views-analytics";

interface InteractiveBarChartProps {
	title: string;
	description: string;
	data: DailyAnalyticsItem[]; //Dynamic dataset
	dataKey: string; // Key for the data values (e.g "uv")
	dataKey2: string; // Key for the data values (e.g "lv")
	dataKeyLabel: string; // Readable name for dataKey (e.g views)
	dataKeyLabel2: string; // Readable name for dataKey (e.g views)
	color?: string; // Optional custom color
	color2?: string; // Optional custom color
	textLine1?: string; // Optional text line 1
	textLine2?: string; // Optional text line 2
}

const InteractiveBarChartExample: React.FC<InteractiveBarChartProps> = ({ title, description, data, dataKey, dataKey2, dataKeyLabel, dataKeyLabel2, color = "#8884d8", color2 = "#8884d8" }) => {
	const chartConfig = {
		views: {
			label: "Page Views",
		},
		desktop: {
			label: "Desktop",
			color: "hsl(var(--chart-1))",
		},
		mobile: {
			label: "Mobile",
			color: "hsl(var(--chart-2))",
		},
	} satisfies ChartConfig;

	// Choose between different data sets
	const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("desktop");

	const total = React.useMemo(
		() => ({
			desktop: data.reduce((acc, curr) => acc + curr.desktop, 0),
			mobile: data.reduce((acc, curr) => acc + curr.mobile, 0),
		}),
		[]
	);

	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</div>
				<div className="flex">
					{["desktop", "mobile"].map((key) => {
						const chart = key as keyof typeof chartConfig;
						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-1 data-[active=true]:bg-muted/50 sm:border-1 sm:border-t-0 sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-sx text-muted-foreground">{chartConfig[chart].label}</span>
								<span>{total[key as keyof typeof total].toLocaleString()}</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className="px-2 sm:p-6">
				<ChartContainer config={chartConfig} className="h[150px] w-full">
					<BarChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="views"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										});
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default InteractiveBarChartExample;

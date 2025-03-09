import AreaChartExample from "@/components/charts/AreaChart";
import BarChartExample from "@/components/charts/BarChart";
import LineChartExample from "@/components/charts/LineChart";
import InteractiveBarChartExample from "@/components/charts/InteractiveBarChart";

import { Separator } from "@/components/ui/separator";

import dailyChartData from "@/data/example-daily-views-analytics";
import monthlyChartData from "@/data/example-monthly-views-analytics";

const ExampleChartsPage = () => {
	return (
		<>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 gap-2 mb-2">
				<LineChartExample
					title="Line Chart"
					description="Views per month"
					data={monthlyChartData}
					dataKey="desktop"
					dataKeyLabel="Desktop"
					color="#8884d8"
					textLine1="Views increased by 7% this month"
					textLine2="Showing total visitors for the last 12 months"
				/>
				<AreaChartExample
					title="Area Chart"
					description="Website Views per month"
					data={monthlyChartData}
					dataKey="desktop"
					dataKey2="mobile"
					dataKeyLabel="Desktop"
					dataKeyLabel2="Mobile"
					color="#8884d8"
					color2="#8884"
					textLine1="Views increased by 7% this month"
					textLine2="Showing total visitors for the last 12 months"
				/>
				<BarChartExample
					title="Bar Chart"
					description="Website Views per month"
					data={monthlyChartData}
					dataKey="desktop"
					dataKey2="mobile"
					dataKeyLabel="Desktop"
					dataKeyLabel2="Mobile"
					color="#8884d8"
					color2="#8884"
					textLine1="Views increased by 7% this month"
					textLine2="Showing total visitors for the last 12 months"
				/>
			</div>
			<Separator />
			<div className="p-2 gap-2 mb-2">
				<InteractiveBarChartExample title="Interactive Bar Chart" description="Website Views per month" data={dailyChartData} dataKey="desktop" dataKey2="mobile" dataKeyLabel="Desktop" dataKeyLabel2="Mobile" color="#8884d8" color2="#8884" />
			</div>
		</>
	);
};

export default ExampleChartsPage;

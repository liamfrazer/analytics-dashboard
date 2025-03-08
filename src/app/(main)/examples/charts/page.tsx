import LineChartExample from "@/components/charts/LineChart";
import data from "@/data/analytics";

const ExampleChartsPage = () => {
	return (
		<div className="p-5">
			<div className="mb-2">
				<LineChartExample title="Line Chart" description="Website Views per month" data={data} dataKey="uv" color="#8884d8" textLine1="Views increased by 7% this month" textLine2="Showing total visitors for the last 12 months" />
			</div>
			<div className="mb-2">
				<LineChartExample title="Line Chart" description="Website Views per month" data={data} dataKey="uv" color="#8884d8" textLine1="Views increased by 7% this month" textLine2="Showing total visitors for the last 12 months" />
			</div>
		</div>
	);
};

export default ExampleChartsPage;

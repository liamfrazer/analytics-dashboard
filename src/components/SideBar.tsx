import { LayoutDashboard, ChartLine, Presentation, FolderKanban, Settings, FileChartColumn } from "lucide-react";

import { Sidebar, SidebarContent, SidebarSeparator, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const liveItems = [
	{
		title: "Dashboard",
		url: "/",
		icon: LayoutDashboard,
	},
	{
		title: "Insights",
		url: "#",
		icon: Presentation,
	},
	{
		title: "Charts",
		url: "/charts",
		icon: ChartLine,
	},
];

const exampleItems = [
	{
		title: "Insights",
		url: "#",
		icon: FileChartColumn,
	},
	{
		title: "Charts",
		url: "/examples/charts",
		icon: FolderKanban,
	},
];

const settingsItems = [
	{
		title: "Profile",
		url: "#",
		icon: Settings,
	},
];

const SideBar = () => {
	return (
		<Sidebar className="top-[--header-height] !h[calc(100svh-var(--header-height))]" collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Live</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{liveItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarSeparator />
					<SidebarGroupLabel>Examples</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{exampleItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
					<SidebarSeparator />
					<SidebarGroupLabel>Settings</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{settingsItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};

export default SideBar;

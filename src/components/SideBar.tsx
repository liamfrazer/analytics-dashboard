// import Link from "next/link";
// import { LayoutDashboard, ChartLine, Presentation, FolderKanban, Settings, FileChartColumn } from "lucide-react";

// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

// const SideBar = () => {
// 	return (
// 		<Command className="bg-secondary rounded-none">
// 			<CommandInput placeholder="Search" />
// 			<CommandList>
// 				<CommandGroup heading="Live">
// 					<CommandItem>
// 						<LayoutDashboard className="mr-2 h-4 w-4" />
// 						<Link href="/">Dashboard</Link>
// 					</CommandItem>
// 					<CommandItem>
// 						<Presentation className="mr-2 h-4 w-4" />
// 						<Link href="/insights">Insights</Link>
// 					</CommandItem>
// 					<CommandItem>
// 						<ChartLine className="mr-2 h-4 w-4" />
// 						<Link href="/charts">Charts</Link>
// 					</CommandItem>
// 				</CommandGroup>
// 				<CommandSeparator />
// 				<CommandGroup heading="Examples">
// 					<CommandItem>
// 						<FileChartColumn className="mr-2 h-4 w-4" />
// 						<Link href="/examples/insights">Insights</Link>
// 					</CommandItem>
// 					<CommandItem>
// 						<FolderKanban className="mr-2 h-4 w-4" />
// 						<Link href="/examples/charts">Charts</Link>
// 					</CommandItem>
// 				</CommandGroup>
// 				<CommandSeparator />
// 				<CommandGroup heading="Settings">
// 					<CommandItem>
// 						<Settings className="mr-2 h-4 w-4" />
// 						<Link href="/profile">Profile</Link>
// 					</CommandItem>
// 				</CommandGroup>
// 			</CommandList>
// 		</Command>
// 	);
// };

// export default SideBar;

import { LayoutDashboard, ChartLine, Presentation, FolderKanban, Settings, FileChartColumn } from "lucide-react";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

const liveItems = [
	{
		title: "Dashboard",
		url: "/",
		icon: LayoutDashboard,
	},
	{
		title: "Insights",
		url: "/insights",
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
		url: "/examples/insights",
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
		url: "/",
		icon: Settings,
	},
];

const SideBar = () => {
	return (
		<Sidebar className="top-[--header-height] !h[calc(100svh-var(--header-height))] " collapsible="icon">
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

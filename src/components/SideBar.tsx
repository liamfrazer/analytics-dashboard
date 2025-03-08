import Link from "next/link";
import { LayoutDashboard, ChartLine, Presentation, FolderKanban, Settings, FileChartColumn } from "lucide-react";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";

const SideBar = () => {
	return (
		<Command className="bg-secondary rounded-none">
			<CommandInput placeholder="Search" />
			<CommandList>
				<CommandGroup heading="Live">
					<CommandItem>
						<LayoutDashboard className="mr-2 h-4 w-4" />
						<Link href="/">Dashboard</Link>
					</CommandItem>
					<CommandItem>
						<Presentation className="mr-2 h-4 w-4" />
						<Link href="/insights">Insights</Link>
					</CommandItem>
					<CommandItem>
						<ChartLine className="mr-2 h-4 w-4" />
						<Link href="/charts">Charts</Link>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Examples">
					<CommandItem>
						<FileChartColumn className="mr-2 h-4 w-4" />
						<Link href="/examples/insights">Insights</Link>
					</CommandItem>
					<CommandItem>
						<FolderKanban className="mr-2 h-4 w-4" />
						<Link href="/examples/charts">Charts</Link>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<Settings className="mr-2 h-4 w-4" />
						<Link href="/profile">Profile</Link>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	);
};

export default SideBar;

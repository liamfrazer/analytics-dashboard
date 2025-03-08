import { cookies } from "next/headers";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
	// Save Sidebar state across different pages
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

	return (
		<div className="[--header-height:calc(theme(spacing.10))]">
			<SidebarProvider className="flex flex-col" defaultOpen={defaultOpen}>
				<NavBar />
				<div className="flex flex-1">
					<SideBar />
					<SidebarInset>
						<main>{children}</main>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
};

export default MainLayout;

import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<div className="flex">
				<div className="hidden md:block h-[138vh] w-[200px]">
					<SideBar />
				</div>
				<div>
					<>{children}</>
				</div>
			</div>
		</>
	);
};

export default MainLayout;

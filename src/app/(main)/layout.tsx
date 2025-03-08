import NavBar from "@/components/NavBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<NavBar />
			<div>
				<>{children}</>
			</div>
		</>
	);
};

export default MainLayout;

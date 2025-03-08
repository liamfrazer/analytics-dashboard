import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import ThemeToggler from "@/components/ThemeToggler";

import github from "@/img/github.svg";

const NavBar = () => {
	return (
		<div className="bg-secondary text-black dark:text-white py-2 px-5 flex justify-between">
			<Link className="flex items-center" href="/">
				Analytics Dashboard
			</Link>
			<div className="flex items-center">
				<Button variant="outline" size="icon" className="dark:bg-slate-700 dark:hover:bg-slate-600 bg-gray-300 hover:bg-gray-400 border-0 mr-2 transition-colors">
					<Link href="https://github.com/liamfrazer/analytics-dashboard">
						<Image src={github} alt="GitHub Logo" className="h-[1.2rem] w-[1.2rem] transitional-all dark:invert" />
					</Link>
				</Button>
				<ThemeToggler />
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn Avatar Logo" />
							<AvatarFallback className="text-black dark:text-white text-sm">Login</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>My Account</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href="/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/profile">Logout</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default NavBar;

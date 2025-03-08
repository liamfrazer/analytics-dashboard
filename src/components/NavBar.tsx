import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import ThemeToggler from "@/components/ThemeToggler";

const NavBar = () => {
	return (
		<div className="bg-slate-700 dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
			<Link className="flex items-center" href="/">
				Analytics Dashboard
			</Link>
			<div className="flex items-center">
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

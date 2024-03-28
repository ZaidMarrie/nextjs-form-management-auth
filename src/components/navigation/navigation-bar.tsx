"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import ThemeToggle from "./theme-toggle";
import AccountDropdownMenu from "./account-dropdown";
import { NavigationBarProps } from "@/lib/definitions";

function NavigationBar({ session }: NavigationBarProps) {
	return (
		<NavigationMenu className="max-w-5xl mx-auto py-2 px-8 justify-between">
			<Link className="mr-4" href="/">
				<span className="font-semibold">Next Forms & Auth</span>
			</Link>

			<NavigationMenuList className="min-h-[46px] align-center gap-4">
				<NavigationMenuItem>
					<ThemeToggle />
				</NavigationMenuItem>

				{!session ? (
					<>
						<NavigationMenuItem>
							<NavigationMenuIndicator></NavigationMenuIndicator>
							<Button variant="ghost" asChild>
								<Link href="/login">Login</Link>
							</Button>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Button asChild>
								<Link href="/register">Register</Link>
							</Button>
						</NavigationMenuItem>
					</>
				) : (
					<AccountDropdownMenu />
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;

"use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import ThemeToggle from "./theme-toggle";

function NavigationBar() {
	return (
		<NavigationMenu className="max-w-5xl mx-auto justify-between md:py-2 md:px-8">
			<Link className="mr-4" href="/">
				<span className="font-semibold">Next Forms & Auth</span>
			</Link>

			<NavigationMenuList className="gap-2">
				<NavigationMenuItem>
					<ThemeToggle />
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Button variant="ghost" asChild>
						<Link href="/login">Login</Link>
					</Button>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Button asChild>
						<Link href="/register">Register</Link>
					</Button>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;

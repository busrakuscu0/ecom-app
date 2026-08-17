"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useUser } from "@auth0/nextjs-auth0";
import { buttonVariants } from "@/components/ui/button";
import { DropdownMenuBasic } from "./DropdownMenu";
import { Spinner } from "@/components/ui/spinner";
import { useTheme } from "next-themes";
import { SwitchDarkMode } from "./SwitchDarkMode";

export default function Navbar() {
  const { user, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  if (isLoading) return <Spinner>Loading...</Spinner>;

  const categories: { title: string; href: string }[] = [
    {
      title: "Wall Decor",
      href: "/products/categories/wall-decor",
    },
    {
      title: "Decorative Accents",
      href: "/products/categories/decorative-accents",
    },
    {
      title: "Candles & Home Fragrance",
      href: "/products/categories/candles-home-fragrance",
    },
    {
      title: "Textiles",
      href: "/products/categories/textiles",
    },
  ];

  return (
    <header className="w-full flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="block dark:hidden"
            />

            <Image
              src="/logo-dark.png"
              alt="Logo"
              width={100}
              height={100}
              className="hidden dark:block"
            />
          </Link>
          <div className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/">New Arrivals</Link>}
              />
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {categories.map((category) => (
                    <ListItem
                      key={category.title}
                      title={category.title}
                      href={category.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </div>

          <div className="flex gap-4 justify-self-end">
            {!!user ? (
              <DropdownMenuBasic />
            ) : (
              <>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={buttonVariants({ variant: "secondary" })}
                    render={<Link href="/auth/login">Log In</Link>}
                  />
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={buttonVariants({ variant: "default" })}
                    render={
                      <Link href="/auth/login?screen_hint=signup">SIGN UP</Link>
                    }
                  />
                </NavigationMenuItem>
              </>
            )}
          </div>
        </NavigationMenuList>
        <SwitchDarkMode />
      </NavigationMenu>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}

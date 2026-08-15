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

export default function Navbar() {
  const { user, isLoading } = useUser();

  if (isLoading) return <></>;

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
    <NavigationMenu>
      <NavigationMenuList>
        <div className="flex gap-12">
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
        <Link href={"/"}>
          <Image src="/vesper-logo.png" alt="Logo" width={150} height={150} />
        </Link>
        <div className="flex gap-8 justify-self-end">
          {!!user ? (
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/auth/logout">Log out</Link>}
              />
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={<Link href="/auth/login">Log In</Link>}
                />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  render={
                    <Link href="/auth/login?screen_hint=signup">SIGN UP</Link>
                  }
                />
              </NavigationMenuItem>
            </>
          )}
        </div>
      </NavigationMenuList>
    </NavigationMenu>
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

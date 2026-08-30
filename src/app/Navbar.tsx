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
import { SwitchDarkMode } from "./SwitchDarkMode";

export default function Navbar() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Spinner>Loading...</Spinner>;

  const mainCategories: {
    title: string;
    subcategories: { title: string; href: string }[];
  }[] = [
    {
      title: "Living Room",
      subcategories: [
        {
          title: "Sofas & Sectionals",
          href: "/products/living-room/sofas-sectionals",
        },
        {
          title: "Coffee Tables",
          href: "/products/living-room/coffee-tables",
        },
        {
          title: "Armchairs",
          href: "/products/living-room/armchairs",
        },
        {
          title: "Shelving",
          href: "/products/living-room/shelving",
        },
        {
          title: "Rugs",
          href: "/products/living-room/rugs",
        },
      ],
    },
    {
      title: "Bedroom",
      subcategories: [
        { title: "Beds & Frames", href: "/products/bedroom/beds-frames" },
        {
          title: "Bedside Tables",
          href: "/products/bedroom/bedside-tables",
        },
        {
          title: "Wardrobes",
          href: "/products/bedroom/wardrobes",
        },
        {
          title: "Bedding & Linen",
          href: "/products/bedroom/bedding-linen",
        },
        {
          title: "Mirrors",
          href: "/products/bedroom/mirrors",
        },
      ],
    },
    {
      title: "Kitchen & Dining",
      subcategories: [
        {
          title: "Dining Tables",
          href: "/products/kitchen-dining/dining-tables",
        },
        {
          title: "Chairs",
          href: "/products/kitchen-dining/chairs",
        },
        {
          title: "Serveware",
          href: "/products/kitchen-dining/serveware",
        },
        {
          title: "Ceramics",
          href: "/products/kitchen-dining/ceramics",
        },
        {
          title: "Glassware",
          href: "/products/kitchen-dining/glassware",
        },
      ],
    },
    {
      title: "Lighting",
      subcategories: [
        { title: "Pendants", href: "/products/lighting/pendants" },
        {
          title: "Floor Lamps",
          href: "/products/lighting/floor-lamps",
        },
        {
          title: "Table Lamps",
          href: "/products/lighting/table-lamps",
        },
        {
          title: "Wall Lights",
          href: "/products/lighting/wall-lights",
        },
        {
          title: "Outdoor Lighting",
          href: "/products/lighting/outdoor-lighting",
        },
      ],
    },
    {
      title: "Textiles",
      subcategories: [
        {
          title: "Throws & Blankets",
          href: "/products/textiles/throws-blankets",
        },
        {
          title: "Cushions",
          href: "/products/textiles/cushions",
        },
        {
          title: "Curtains",
          href: "/products/textiles/curtains",
        },
        {
          title: "Bath Linens",
          href: "/products/textiles/bath-linens",
        },
        {
          title: "Table Linen",
          href: "/products/textiles/table-linen",
        },
      ],
    },
  ];

  return (
    <header className="w-full flex items-center justify-between">
      <NavigationMenu>
        <NavigationMenuList>
          <div>
            <Link href={"/"}>
              <Image
                src="/logo-image.png"
                alt="Logo"
                width={120}
                height={80}
                className="block dark:hidden"
              />

              <Image
                src="/logo-dark-image.png"
                alt="Logo"
                width={120}
                height={80}
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            {mainCategories.map((category) => (
              <NavigationMenuItem key={category.title}>
                <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {category.subcategories.map((sub) => (
                      <ListItem
                        key={sub.title}
                        title={sub.title}
                        href={sub.href}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
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

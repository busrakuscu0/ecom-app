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
} from "@/components/ui/navigation-menu";
import { useUser } from "@auth0/nextjs-auth0";
import { buttonVariants } from "@/components/ui/button";
import { DropdownMenuBasic } from "./DropdownMenu";
import { Spinner } from "@/components/ui/spinner";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Spinner>Loading...</Spinner>;

  const mainCategories: {
    title: string;
    subcategories: { title: string; href: string }[];
    shopby: { title: string; href: string }[];
    img: string;
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
      shopby: [
        { title: "New Arrivals", href: "/products/living-room/news" },
        { title: "Best Sellers", href: "/products/living-room/best-sellers" },
        { title: "Sale", href: "/products/living-room/sale" },
        {
          title: "Sustainable Picks",
          href: "/products/living-room/picks",
        },
      ],
      img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop&auto=format",
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
      shopby: [
        { title: "New Arrivals", href: "/products/bedroom/news" },
        { title: "Best Sellers", href: "/products/bedroom/best-sellers" },
        { title: "Sale", href: "/products/bedroom/sale" },
        {
          title: "Sustainable Picks",
          href: "/products/bedroom/picks",
        },
      ],
      img: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&h=300&fit=crop&auto=format",
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
      shopby: [
        { title: "New Arrivals", href: "/products/kitchen-dining/news" },
        {
          title: "Best Sellers",
          href: "/products/kitchen-dining/best-sellers",
        },
        { title: "Sale", href: "/products/kitchen-dining/sale" },
        {
          title: "Sustainable Picks",
          href: "/products/kitchen-dining/picks",
        },
      ],
      img: "https://images.unsplash.com/photo-1770731206301-43a9683f3438?w=400&h=300&fit=crop&auto=format",
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
      shopby: [
        { title: "New Arrivals", href: "/products/lighting/news" },
        { title: "Best Sellers", href: "/products/lighting/best-sellers" },
        { title: "Sale", href: "/products/lighting/sale" },
        {
          title: "Sustainable Picks",
          href: "/products/lighting/picks",
        },
      ],
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=300&fit=crop&auto=format",
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
      shopby: [
        { title: "New Arrivals", href: "/products/textiles/news" },
        { title: "Best Sellers", href: "/products/textiles/best-sellers" },
        { title: "Sale", href: "/products/textiles/sale" },
        {
          title: "Sustainable Picks",
          href: "/products/textiles/picks",
        },
      ],
      img: "https://images.unsplash.com/photo-1667915981646-3ec32877dfbf?w=400&h=300&fit=crop&auto=format",
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
                width={100}
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
                  <div>
                    <h2 className="text-xs tracking-widest text-primary mb-4">
                      CATEGORIES
                    </h2>
                    <ul>
                      {category.subcategories.map((sub) => (
                        <ListItem
                          key={sub.title}
                          title={sub.title}
                          href={sub.href}
                        />
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xs tracking-widest text-primary mb-4">
                      SHOP BY
                    </h2>
                    <ul className="space-y-2">
                      {category.shopby.map((shop) => (
                        <ListItem
                          key={shop.title}
                          title={shop.title}
                          href={shop.href}
                        />
                      ))}
                    </ul>
                  </div>
                  <div className="relative overflow-hidden bg-[#F2EDE3]">
                    <img
                      src={category.img}
                      alt={category.title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#2C2A27]/50 to-transparent flex items-end p-4">
                      <span className="font-serif text-lg text-[#FAF8F4] font-300">
                        Shop {category.title}
                      </span>
                    </div>
                  </div>
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
        <ThemeToggle />
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

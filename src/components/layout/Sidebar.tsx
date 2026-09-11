"use client";

import * as React from "react";

import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboardIcon,
  ShoppingCartIcon,
  PackageIcon,
  UsersIcon,
  ArrowDownRightIcon,
  PackagePlus,
} from "lucide-react";

const adminLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: ShoppingCartIcon,
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: PackageIcon,
  },
  { title: "Create product", href: "/admin/products/new", icon: PackagePlus },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: UsersIcon,
  },
] as const;

export function Sidebar({
  ...props
}: React.ComponentProps<typeof SidebarPrimitive>) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <SidebarPrimitive collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <Link href={"/"}>
            <Image
              src="/logo-image.png"
              alt="Logo"
              width={120}
              height={100}
              className="block dark:hidden"
            />

            <Image
              src="/logo-dark-image.png"
              alt="Logo"
              width={120}
              height={100}
              className="hidden dark:block"
            />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {adminLinks.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    isActive={
                      item.href === "/admin"
                        ? pathname === "/admin"
                        : pathname.startsWith(item.href)
                    }
                    render={
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
            <SidebarSeparator />
            <SidebarMenuItem>
              <SidebarMenuButton render={<Link href="/" />}>
                <ArrowDownRightIcon />
                Back to Store
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </SidebarPrimitive>
    </SidebarProvider>
  );
}

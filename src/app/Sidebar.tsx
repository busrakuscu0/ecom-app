"use client";

import * as React from "react";

import {
  Sidebar,
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
} from "lucide-react";

const listitems = [
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
  {
    title: "Customers",
    href: "/admin/customers",
    icon: UsersIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <Link href={"/"}>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {listitems.map((item) => {
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
              <SidebarMenuButton
                render={
                  <Link href="/">
                    <ArrowDownRightIcon />
                    Back to Store
                  </Link>
                }
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}

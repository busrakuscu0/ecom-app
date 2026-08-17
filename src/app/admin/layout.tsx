import { requireAdmin } from "@/lib/auth0";
import type { Metadata } from "next";
import { AppSidebar } from "../Sidebar";

export const metadata: Metadata = {
  title: "Ecommmerce Admin",
  description: "Admin ecommerce dashboard",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await requireAdmin();

  return (
    <div>
      <AppSidebar />
      {children}
    </div>
  );
}

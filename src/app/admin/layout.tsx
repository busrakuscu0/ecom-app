import { requireAdmin } from "@/lib/auth0";
import type { Metadata } from "next";
import { Sidebar } from "../../components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Ecommmerce Admin",
  description: "Admin ecommerce platform",
};

export default async function AdminLayout({ children }: LayoutProps<"/">) {
  await requireAdmin();

  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

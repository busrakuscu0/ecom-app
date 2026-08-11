import { requireAdmin } from "@/lib/auth0";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommmerce Admin",
  description: "Admin ecommerce dashboard",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await requireAdmin();

  //TODO: Make sure only admin user can access this page.
  return <div>{children}</div>;
}

import { requireUser } from "@/lib/auth0";
import type { Metadata } from "next";
import Navbar from "../../Navbar";

export const metadata: Metadata = {
  title: "Ecommmerce User",
  description: "User ecommerce dashboard",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await requireUser();
  return <div>{children}</div>;
}

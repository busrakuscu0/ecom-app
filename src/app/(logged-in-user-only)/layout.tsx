import { requireUser } from "@/lib/auth0";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommmerce User",
  description: "User ecommerce platform",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await requireUser();
  return <div>{children}</div>;
}

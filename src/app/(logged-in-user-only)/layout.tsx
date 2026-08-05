import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommmerce User",
  description: "User ecommerce dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <div>{children}</div>;
}

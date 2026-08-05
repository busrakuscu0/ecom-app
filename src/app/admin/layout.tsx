import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ecommmerce Admin",
  description: "Admin ecommerce dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <div>{children}</div>;
}

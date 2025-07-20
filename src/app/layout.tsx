import type { Metadata } from "next";
import "./_styles/fonts.css";
import "./_styles/globals.css";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Subsify - Stay in Control.",
  description:
    "Never lose track of where your money’s going. Subsify helps you manage, monitor, and cancel all your subscriptions in one clean dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fredoka, Quicksand } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SelectedItemsDrawer } from "@/components/SelectedItemsDrawer";
import { SelectedItemsProvider } from "@/context/SelectedItemsContext";
import { SITE_NAME } from "@/lib/constants";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} · Handmade clay & sparkly accessories`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Handmade clay and bedazzled accessories from Mia’s Mini Market. Browse, select items, and email your order request — no checkout on this site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${quicksand.variable}`}>
      <body>
        <SelectedItemsProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <SelectedItemsDrawer />
        </SelectedItemsProvider>
      </body>
    </html>
  );
}

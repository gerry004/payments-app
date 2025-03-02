import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payments App",
  description: "Uses Stripe and Revolut to process payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 
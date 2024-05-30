import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rooms to rent in London for short to medium lets",
  description:
    "Find a fully refirbished room at an affordible price in London. Ideal for students and young professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import { Lato } from "next/font/google";
import "./globals.css";

const inter = Lato({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import { Inria_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./store/StoreProvider";

const InriaSans = Inria_Sans({
  subsets: ["latin"],
  variable: "--font-inria-sans",
  weight: ["400", "700"],
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600","700"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}

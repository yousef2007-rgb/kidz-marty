import "./globals.css";
import { Poppins } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";

const roboto = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={roboto.className} lang="en">
      <body>
        <CookiesProvider>{children}</CookiesProvider>
      </body>
    </html>
  );
}

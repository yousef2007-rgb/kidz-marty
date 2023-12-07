import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Provider } from "../AppContext";
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1200px] flex flex-col min-h-screen mx-auto">
      <Provider>
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </Provider>
    </div>
  );
}

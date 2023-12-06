import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Provider } from '../AppContext';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <Provider>
            <Header />
            {children}
            <Footer />
        </Provider>
    )
}

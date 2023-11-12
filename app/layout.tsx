import './globals.css'
import { Poppins } from 'next/font/google'
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Poppins({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['devanagari'],
    display: 'swap',
})
export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html className={roboto.className} lang="en">
            <body className='max-w-[1200px] mx-auto'>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

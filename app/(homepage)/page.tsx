import Header from "@/components/header";
import {intro as Intro} from '@/components/intro';
import {body as Body} from './body'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col ">
            <Header />
            <Intro />
            <Body />
        </main>
    )
}

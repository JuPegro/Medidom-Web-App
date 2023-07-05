import { About, Footer, Medidom, Navbar, Services } from '@/components'


export default function Home() {
    return (
        <main className=''>
            <div className='top-0 sticky z-50'>
            <Navbar />
            </div>
            <Medidom/>
            <About/>
            <Services/>
            <Footer/>
        </main>
    )
}

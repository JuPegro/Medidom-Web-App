import { About, Medidom, Services } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className=''>
      <Medidom/>
      <About/>
      <Services/>
    </main>
  )
}

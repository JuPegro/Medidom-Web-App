import { About, Medidom, Services } from '@/components'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='last:w-full h-full'>
      <Medidom/>
      <About/>
      <Services/>
    </main>
  )
}

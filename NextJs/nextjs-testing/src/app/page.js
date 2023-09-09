import Link from 'next/link'
import About from './about/page'
import Banner from './Banner'

export default function Home() {
  return (
    <div>
      <h1 className='h'>Hello</h1>
      <Link href='/about'>got to about</Link>
      <Banner></Banner>
    </div>
  )
}

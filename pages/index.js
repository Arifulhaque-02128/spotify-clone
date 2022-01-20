import Head from 'next/head';
import Sidebar from '../Components/Sidebar/Sidebar';
import Center from '../Components/Center/center'

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main className="flex">
        {/* Sidebar */}
        <div className='h-screen bg-black overflow-y-scroll scrollbar-hide w-1/5'>
          <Sidebar />
        </div>

        {/* Center Content */}
        <div className='h-screen w-4/5'>
          <Center />
        </div>
        
        
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}

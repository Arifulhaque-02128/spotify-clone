import Head from 'next/head';
import Sidebar from '../Components/Sidebar/Sidebar';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
      </Head>
      <main className="bg-black">
        {/* Sidebar */}
        <div className='h-screen bg-black overflow-y-scroll w-1/5'>
          <Sidebar />
        </div>
        
        {/* Center Content */}
      </main>
      <div>
        {/* Player */}
      </div>
    </div>
  )
}

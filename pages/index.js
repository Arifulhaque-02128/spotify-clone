import Head from 'next/head';
import Sidebar from '../Components/Sidebar/Sidebar';
import Center from '../Components/Center/center'
import { getSession } from 'next-auth/react';

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


export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: { session }
  }
}

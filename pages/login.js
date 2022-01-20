import React from 'react'
import Image from 'next/image'
import { signIn, getProviders } from 'next-auth/react' 
import logo from '../public/spotify_logo.png'

function login({ providers }) {
    // console.log(Object.values(providers))
    return (
        <div className='flex flex-col items-center justify-center bg-black text-white min-h-screen'>
            <div>
                <Image src={logo} alt="Spotify Logo" width="256" height="256" />
            </div>
            <div>
                {
                    Object?.values(providers)?.map((provider) => 
                        <div key={provider.name}>
                            <button 
                                className="bg-[#1DB954] p-3 my-5 rounded-md"
                                onClick={() => signIn(provider.id, { callbackUrl: "/"})}
                                > Login with Spotify
                            </button>
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default login

export async function getServerSideProps() {
    const providers = await getProviders();

    return{
        props: { providers }
    }
}

import React, { useEffect, useState } from 'react'
import { SearchIcon, LibraryIcon, HomeIcon, RssIcon, HeartIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react'
import useSpotify from '../../Hooks/useSpotify'
import { useRecoilState } from 'recoil';
import { playlistIdState } from '../../Atom/playlistAtom';

function Sidebar() {

    const spotifyApi = useSpotify()
    const { data: session } = useSession();
    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylistId, setSelectedPlaylistId] = useRecoilState(playlistIdState);

    useEffect(() => {
        if(spotifyApi.getAccessToken()){
            spotifyApi.getUserPlaylists().then( (data) => {
                setPlaylists(data.body.items)
            });
        }
    }, [session, spotifyApi]);

    // console.log("all playlist :", playlists)
    // console.log("selectedPlaylist : ", selectedPlaylistId)
    return (
        <div className="sm:text-sm md:text-sm lg:text-base">
            <div className='flex-col text-gray-500'>
                <button className='flex items-center my-3 hover:text-white'
                onClick={() => signOut()}
                >
                    <p className='mx-3'>LOG OUT</p>
                </button>
                <button className='flex items-center p-3 hover:text-white'>
                    <HomeIcon className='h-5 w-5' />
                    <p className='mx-3'>Home</p>
                </button>
                <button className='flex items-center p-3 hover:text-white'>
                    <SearchIcon className='h-5 w-5' />
                    <p className='mx-3'>Search</p>
                </button>
                <button className='flex items-center p-3 hover:text-white'>
                    <LibraryIcon className='h-5 w-5' />
                    <p className='mx-3'>Your Library</p>
                </button>
                <hr className='border-gray-900 border-t-[0.1px] my-3 mx-4' />
            </div>


            <div className='flex-col text-gray-500'>
                <button className='flex items-center p-3 hover:text-white'>
                    <PlusCircleIcon className='h-5 w-5' />
                    <p className='mx-3'>Create Playlist</p>
                </button>
                <button className='flex items-center p-3 hover:text-white'>
                    <HeartIcon className='h-5 w-5' />
                    <p className='mx-3'>Liked Songs</p>
                </button>
                <button className='flex items-center p-3 hover:text-white'>
                    <RssIcon className='h-5 w-5' />
                    <p className='mx-3'>Your Episodes</p>
                </button>
                <hr className='border-gray-900 border-t-[0.1px] my-3 mx-4' />
            </div>


            <div className='flex-col text-gray-500'>

                {
                    playlists.map((playlist) => 
                        <button type="button" key={playlist.id} 
                        className='flex items-center p-3 hover:text-white'
                        onClick={() => setSelectedPlaylistId(playlist.id)}>
                            <p>{playlist.name}</p>
                        </button>
                    )
                }

                <hr className='border-black border-t-[0.1px] mb-5' />
            </div>
        </div>
    )
}

export default Sidebar

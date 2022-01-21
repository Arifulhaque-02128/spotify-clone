import React from 'react';
import miliToMinutesAndSeconds from '../../lib/duration';


function Song({ track, index }) {

    return (
        <div className="grid grid-cols-2 mx-2 items-center gap-2 text-gray-500 hover:bg-gray-900 rounded-lg cursor-pointer">
            <div className="flex items-center p-5">
                <p className='mx-2'>{index + 1}</p>
                <img src={track?.track?.album?.images[0]?.url} className="h-[40px] w-[40px]" alt={track.track.name} />
                <div className="mx-2">
                    <p className="text-white">{track?.track?.name}</p>
                    <p>{track?.track?.album?.artists[0].name}</p>
                </div>
            </div>
            <div className="flex justify-between px-4">
                <p className="hidden md:inline">{track?.track?.album.name}</p>
                <p className="mr-4">{miliToMinutesAndSeconds(track?.track?.duration_ms)}</p>
            </div>
        </div>
    );
}

export default Song;

import React from 'react';
import { useRecoilValue } from 'recoil';
import { playlistState } from '../../Atom/playlistAtom';
import Song from './Song';

function Songs() {

    const playlist = useRecoilValue(playlistState);
    // console.log(playlist)
    return (
        <div>
            <div>
                {
                    playlist?.tracks.items.map((track, idx) => 
                        <Song key={track.track.id} track={track} index={idx} />
                    )
                }
            </div>
        </div>
    );
}

export default Songs;

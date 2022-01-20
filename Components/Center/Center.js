import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import styles from './Center.module.css';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { shuffle } from 'lodash';


const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
];

function center() {

    const { data: session } = useSession();
    const [color, setColor] = useState(null);

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [])

    return (
        <div className="w-full h-screen bg-black">

            <div>
                {
                    session?.user && 
                    <button className="flex bg-black rounded-3xl p-[1px] items-center text-white absolute top-0 right-10 m-4">
                        <Image className="rounded-full opacity-90 cursor-pointer hover:opacity-80" src={session?.user?.image} alt="Profile" width={40} height={40} />
                        <p className="text-white mx-2">{session.user?.name}</p>
                        <ChevronDownIcon className='h-6 w-6' />
                    </button>
                }
            </div>

            <section className={`flex text-white p-8 items-end h-80 bg-gradient-to-b to-black ${color}`}>
                <p>
                    this is center...
                </p>
            </section>
            
        </div>
    );
}

export default center;
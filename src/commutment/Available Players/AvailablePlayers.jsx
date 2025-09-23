import React, { use } from 'react';
import PlayerCard from '../Player/player';

const AvailablePlayers = ({promishPlayer,setAvailableBalans,availableBalans}) => {
    const playerData=use(promishPlayer)
    // console.log(playerData)
    return (
        <div className='max-w-[1200px] mx-auto  grid grid-cols-1 gap-4 md:grid-cols-3 md:p-0 p-3.5'>

            {
                playerData.map(player => <PlayerCard availableBalans={availableBalans} setAvailableBalans={setAvailableBalans} player={player}></PlayerCard>)
               
            }

            {/* <div className="card bg-base-100 w-96 p-4 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
                </figure>
                <div className="">
                    <div className='flex mt-3.5 gap-3 items-center'>
                        <img src={ProfileImg} alt="" />
                        <h2 className="card-title">Player Name</h2>
                    </div>
                    <div className='flex justify-between mt-3.5 border-b-1 border-gray-400 p-3'>
                        <div className='flex gap-3 items-center'>
                            <img src={CountryImg} alt="" />
                            <h2>Country Name</h2>
                        </div>
                        <button className='btn'>All-Rounder</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h1 className='font-bold'>Rating</h1>
                        <p>5.0</p>
                    </div>
                    <div className='flex justify-between items-center mt-2.5 '>
                        <h1 className='font-bold'>Left-Hand-Bat</h1>
                        <p>Left-Hand-Bat</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <h1 className='font-bold'>Price: $<span>1500000</span></h1>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AvailablePlayers;
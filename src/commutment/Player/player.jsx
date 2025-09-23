import React, { useState } from 'react';
import ProfileImg from '../../assets/asdfg (2).png'
import CountryImg from '../../assets/asdfg (1).png'

const PlayerCard = ({player,setAvailableBalans,availableBalans}) => {
    const [isSelect,setIsSelect]=useState(false)
    const balansFunsion = () =>{
       if(availableBalans <player.price_usd){
        alert('Not Found Balans')
        return;
       }
       setIsSelect(true)
       setAvailableBalans(availableBalans-player.price_usd)
    }
    return (
         <div className="card bg-base-100  p-4 shadow-sm border-2 border-blue-500">
                <figure>
                    <img
                    className='w-full h-[200px]'
                    src={player.player_image}
                    alt="Shoes" />
                </figure>
                <div className="">
                    <div className='flex mt-3.5 gap-3 items-center'>
                        <img src={ProfileImg} alt="" />
                        <h2 className="card-title">{player.player_name}</h2>
                    </div>
                    <div className='flex justify-between mt-3.5 border-b-1 border-gray-400 p-3'>
                        <div className='flex gap-3 items-center'>
                            <img src={CountryImg} alt="" />
                            <h2>{player.player_country}</h2>
                        </div>
                        <button className='btn'>{player.playing_role}</button>
                    </div>
                    <div className='flex justify-between items-center mt-4 '>
                        <h1 className='font-bold'>Rating</h1>
                        <p>{player.rating}</p>
                    </div>
                    <div className='flex justify-between items-center mt-2.5 '>
                        <h1 className='font-bold'>{player.bating_style}</h1>
                        <p>{player.bowling_style}</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <h1 className='font-bold'>Price: $<span>{player.price_usd}</span></h1>
                        <button disabled={isSelect} onClick={()=> {balansFunsion()}} className="btn">{ isSelect?'Selected':'Choose Player'}</button>
                    </div>
                </div>
            </div>
    );
};

export default PlayerCard;
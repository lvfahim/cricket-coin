import React from 'react';
import NavImg from '../../assets/logo-footer.png'
import CoinImg from '../../assets/Currency.png'

const Nave = ({availableBalans}) => {
    return (
        <div>
        <div className="navbar md:flex block max-w-[1200px] mx-auto mt-8">
          <div className="flex md:justify-start justify-center items-center md:flex-1 ">
            <img className='md:w-15 md:h-15 w-[100px] h-[100px]' src={NavImg} alt="" />
          </div>
          <div className="md:flex gap-1.5 items-center justify-center">
              <div>
                <button className='mx-2 btn'>Home</button>
                <button className='mx-2 btn'>Fixture</button>
                <button className='mx-2 btn'>Teams</button>
                <button className='mx-2 btn'>Schedules</button>
              </div>
              <div className='md:block flex justify-center items-center'>
                <div className='flex w-[250px] justify-center items-center mt-4 md:mt-0 gap-1.5 border-2 p-2 rounded-xl border-gray-500'>
                 <span>{availableBalans}</span>
                 <span>Coin</span>
                 <img className='rounded-full w-6 h-6' src={CoinImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Nave;
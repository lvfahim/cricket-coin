import React from 'react';
import NavImg from '../../assets/logo-footer.png'
import CoinImg from '../../assets/Currency.png'

const Nave = () => {
    return (
        <div>
        <div className="navbar max-w-[1200px] mx-auto mt-8">
          <div className="flex-1">
            <img className='w-15 h-15' src={NavImg} alt="" />
            </div>
            <div className="flex gap-1.5">
            <span>6000000000</span>
            <span>Coin</span>
            <img className='rounded-full' src={CoinImg} alt="" />
            </div>
          </div>
        </div>
    );
};

export default Nave;
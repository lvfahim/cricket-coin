import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './commutment/Available Players/AvailablePlayers'
import Nave from './commutment/Nave/Nave'
import SelectPlayers from './commutment/Select Players/SelectPlayers'
import Baner from './commutment/Banar Section/Baner'

const feachData= async() =>{
 const res=await fetch('/player.json')
 return res.json()
}
const  promishPlayer=feachData()


function App() {

    const [toggole,setToggole]=useState(true)
    const [availableBalans,setAvailableBalans]=useState(6000)

  return (
    <>
      <Nave availableBalans={availableBalans}></Nave>
      <Baner></Baner>

     <div className='flex justify-between items-center m-4 max-w-[1200px] mx-auto'>
      <h1 className='font-bold text-2xl'>Available Players</h1>
      <div>
        <button onClick={()=> setToggole(true)} className={`btn py-3 px-4 font-bold border-r-0 rounded-l-2xl ${toggole===true?'bg-[#E7FE29]':''}`}>Available</button>
        <button onClick={()=> setToggole(false)} className={`btn py-3 px-4 font-bold border-l-0 rounded-r-2xl ${toggole===false?'bg-[#E7FE29]':''}`}>Selected <spna>(0)</spna></button>
      </div>
     </div>

      {
        toggole===true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers availableBalans={availableBalans} setAvailableBalans={setAvailableBalans} promishPlayer={promishPlayer}></AvailablePlayers>
        </Suspense> : <SelectPlayers></SelectPlayers>
      }  
    </>
  )
}

export default App

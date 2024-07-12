import React from 'react';
import game from "../media/kisscc0-board-game-drinking-game-video-games-logo-mono-roll-5d384038b206b6.7603827115639675447292.png";
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import gif from "../media/Animation - 1720634938561.json"
export default function Games() {
  return (
    <div className='mb-[2rem] sm:flex sm:items-center sm:justify-center'>
   
      <div className="flex flex-col items-center justify-center">
<div className='flex gap-5'>
        <h1 className="text-4xl font-bold mb-8 text-slate-500  ">Let's Play Games !!</h1>
        <img src={game} alt="Game" className="w-40 h-40 mb-8 rounded-lg "/>
     
</div>
   <Lottie className='absolute lg:flex hidden' animationData={gif} loop={true}  style={{ width: '700px' }} />
        <div className="flex mr-[5rem] absolute gap-[1rem] ">
        <Link to="/Memory">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-full shadow-md transition duration-300">
            Memory Game
          </button>
          </Link>
          <Link to="/Catch">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-lg font-semibold rounded-full shadow-md transition duration-300">
            Free Fall
          </button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaBicycle, FaSwimmer, FaWalking, FaYoga } from 'react-icons/fa';
import { GrYoga } from "react-icons/gr";
const challenges = [
  { name: 'Push-ups', icon: <FaDumbbell /> },
  { name: 'Running', icon: <FaRunning /> },
  { name: 'Cycling', icon: <FaBicycle /> },
  { name: 'diving', icon: <FaSwimmer /> },
  { name: 'Walking', icon: <FaWalking /> },
  { name: 'Yoga', icon: <GrYoga /> },
];

const Spinner = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spin = () => {
    setSpinning(true);
    setResult(null);
    const randomIndex = Math.floor(Math.random() * challenges.length);
    setTimeout(() => {
      setSpinning(false);
      setResult(challenges[randomIndex]);
    }, 3000);
  };

  return (
    <div className='flex'>
    <div>
   
        <h2 className="text-lg text-slate-400 font-semibold mt-10 mb-1">Spin the Wheel for Your Next Workout Challenge!</h2>
        
        <button
        onClick={spin}
        className="px-6 py-2 bg-blue-500  text-white rounded hover:bg-blue-700"
      >
        Spin
      </button>
      {result && (
        <div className="mt-2 flex gap-4 text-xl ml-[7rem] text-blue-500">
          <p>Get for: {result.name}</p>
          <div className="text-4xl">{result.icon}</div>
        </div>
      )}
</div>
      <div className="relative w-64 h-64 mx-auto mb-8">
     
        <div
          className={`absolute inset-0 w-[80%] h-[80%] rounded-full border-4 border-blue-500 flex items-center justify-center ${
            spinning ? 'animate-spin' : ''
          }`}
        >
          <div className="grid grid-cols-3 gap-2">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-blue-500 text-2xl"
              >
                {challenge.icon}
                <span className="mt-2 text-sm">{challenge.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
     
      

      
      </div>
    
  );
};

export default Spinner;

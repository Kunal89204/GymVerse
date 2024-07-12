import React from 'react';

const Card = ({ title, text }) => {
  return (
    <div className="bg-white border mt-[2rem] mb-[2rem] border-gray-300 rounded-lg shadow-md p-6 m-4 flex flex-col items-center text-center">
      <div className="flex items-center justify-center bg-pink-500 text-white rounded-full h-12 w-12 mb-4">
        <span className="text-2xl">+</span>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default Card; 
import React from 'react'
import Contact from './Contact';
import Lottie from "lottie-react";
import gif from "../media/Animation - 1720638512048.json"
import giff from "../media/Animation - 1719504456561.json"
import { GoHeartFill } from "react-icons/go";
import News from './News';
import '../App.css';
import Fit from "./Fit"
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import logo from "../media/Virtual GymVerse.png"
import Games from './Games';
import Spinner from './Spinner';
export default function Home() {
  return (
    <div className="App overflow-hidden ">
      <img src={logo} width="120px" className="absolute rounded-full ml-1 mt-1 "/>
      <header className="App-header p-4 lg:p-0">
      <div className="hero flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 hidden lg:flex ">
          <Lottie animationData={gif} loop={true} />
        </div>
        <div className="hero-text mt-6 lg:mt-0 lg:ml-8 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-[6rem] ">Elevate Your Fitness Experience with Advanced Tracking</h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
            "Unlock Your Potential and Achieve Optimal Fitness Levels Through Cutting-Edge Data-Driven Tracking, Providing Personalized Insights and Continuous Motivation"
          </p>
          <div className="mt-4 mb-4 flex flex-col lg:flex-row items-center lg:items-start">
            <Link to="/Tracker">
              <button className="book-now-btn mt-2 lg:mt-0 lg:mr-2 py-2 px-4 lg:px-6 text-base lg:text-lg"><span>Fitness Tracker</span></button>
            </Link>
            <Link to="/Bmi">
              <button className="book-now-btn mt-2 lg:mt-0 lg:ml-2 py-2 px-4 lg:px-6 text-base lg:text-lg">
                BMI Calculator
              </button>
            </Link>
          </div>
          <div className="features  flex-col items-center lg:items-start hidden lg:flex">
  <div className="feature flex flex-col items-center lg:flex-row lg:items-center mb-4">
    <span className="text-xl  lg:mb-0 lg:mr-3" role="img" aria-label="24/7 Online Support">🕒</span>
    <p className='mt-2'>Effortless Activity Monitoring</p>
  </div>
  
  <div className="feature flex flex-col items-center  lg:flex-row lg:items-center mb-4">
    <span className="text-xl  lg:mb-0 lg:mr-3" role="img" aria-label="96 Doctors Online">👨‍⚕️</span>
    <p className='mt-2'>Personalized Goal Setting</p>
  </div>
</div>

        </div>
      </div>
    </header>

    <div className="text-center absolute ml-[35rem] hidden lg:flex"> {/* Hide on screens smaller than lg */}
      <Spinner />
    </div>
    
<div>
  <Fit/>
</div>

<div>
  <Games/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-pink-100 ">
  <Card title="Games" text="Explore fun and interactive games to stay active and engaged." />
  <Card title="Virtual Gym" text="Access virtual gym sessions for personalized workouts." />
  <Card title="Fitness Tracker" text="Track your fitness progress and set goals with our integrated tracker." />
  <Card title="AI Bot" text="Interact with our AI bot for personalized health and fitness advice." />
</div>


<div className='flex flex-col md:flex-row items-center justify-center gap-8 aidiv'>
      <div className='relative text-center md:text-left'>
        <h2 className='text-4xl font-bold text-gray-800 aihead ml-4'>Access AI-Driven Medical Consultations</h2>
        <p className='text-lg text-gray-600 aisubhead ml-4'>Get expert medical advice anytime, anywhere. Fast, reliable, and secure medical consultations at your fingertips.</p>
        <Link to="/Aibot">
          <button className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold  lg:ml-[10rem] py-3 px-6 rounded-full shadow-md transition duration-300 aibtn'>Chat with the AI Bot Now</button>
        </Link>
      </div>
      <div className='w-full md:w-auto'>
        <Lottie animationData={giff} loop={true} className='w-full md:w-auto' />
      </div>
    </div>

<div>
  <News/>
  </div>
<div>
  <Contact/>
</div>
<div className='ml-auto lg:ml-[58rem]'>
  <p className='mt-[4rem] mb-[2rem] flex items-center'>
    Made with <GoHeartFill className="mr-[0.2rem] ml-[0.2rem] text-red-700" /> by Ishita Malhotra
  </p>
</div>


  </div>
  )
}

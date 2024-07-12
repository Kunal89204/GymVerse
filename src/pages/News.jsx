import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import logo1 from "../media/surgical-1200x630px-robots.jpg";
import logo2 from "../media/tips.jfif";
import logo3 from "../media/8_Main_Types_of_Heart_Disease.jpg";
import logo4 from "../media/Strength-training-programs.webp";
import logo5 from "../media/Screenshot 2024-06-20 131823.png";
import logo6 from "../media/supp.jfif";
import logo7 from "../media/park.jfif";

export default function News() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const newsData = [
    {
      image: logo1,
      title: "New Fitness Tech Boosts Workout Efficiency",
      description: "Cutting-edge fitness technology has been introduced to enhance workout efficiency, offering personalized training experiences for better results.",
      date: "June 18, 2024",
      source: "Fitness Monthly",
      link: "https://fitnessmonthly.com"
    },
    {
      image: logo2,
      title: "Healthy Eating Tips for Optimal Fitness",
      description: "Experts share effective strategies for maintaining optimal fitness through proper nutrition, emphasizing the importance of balanced diets.",
      date: "June 16, 2024",
      source: "FitLife Magazine",
      link: "https://fitlifemagazine.com"
    },
    {
      image: logo3,
      title: "New Study Shows Benefits of Yoga for Mental Health",
      description: "Recent research highlights the mental health benefits of practicing yoga regularly, showing significant improvements in stress management and overall well-being.",
      date: "June 14, 2024",
      source: "Yoga Journal",
      link: "https://yogajournal.com"
    },
    {
      image: logo5,
      title: "Importance of Cardiovascular Exercise for Heart Health",
      description: "Health professionals emphasize the critical role of cardiovascular exercises in maintaining heart health and reducing the risk of cardiovascular diseases.",
      date: "June 12, 2024",
      source: "HeartBeat News",
      link: "https://heartbeatnews.com"
    },
    {
      image: logo4,
      title: "Benefits of Strength Training for Aging Adults",
      description: "A new report discusses the benefits of strength training in older adults, highlighting improvements in muscle strength, bone density, and overall quality of life.",
      date: "June 10, 2024",
      source: "Fitness Age",
      link: "https://fitnessage.com"
    },
    {
      image: logo6,
      title: "Nutritional Supplements: Fact or Fiction?",
      description: "An investigation into the effectiveness and safety of nutritional supplements in supporting fitness goals, revealing key considerations for consumers.",
      date: "June 8, 2024",
      source: "Fitness Insights",
      link: "https://fitnessinsights.com"
    },
    {
      image: logo7,
      title: "Outdoor Fitness Trends for Summer 2024",
      description: "Exploring the latest outdoor fitness trends and activities to stay active and healthy during the summer months, focusing on fun and effective workouts.",
      date: "June 6, 2024",
      source: "Outdoor Fitness Guide",
      link: "https://outdoorfitnessguide.com"
    }
  ];

  return (
    <div className="w-full bg-[#f0f4f8]">
      <div className="w-3/4 mx-auto bg-[#f0f4f8]">
        <Slider {...settings}>
          {newsData.map((element, index) => (
            <div key={index} className="bg-white h-[450px] rounded-xl flex flex-col p-4 border-2 border-gray-400 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-full h-40 overflow-hidden rounded-t-xl mb-4">
                <img src={element.image} alt="News" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div className="flex flex-col items-start gap-2">
                  <p className="text-xl font-semibold text-gray-800">{element.title}</p>
                  <p className="text-sm text-gray-600">{element.description}</p>
                  <p className="text-xs text-gray-500">{element.date}</p>
                  <p className="text-xs text-gray-500">{element.source}</p>
                </div>
                <div className="mt-auto">
                  <Link to={{ pathname: element.link }} target="_blank" className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

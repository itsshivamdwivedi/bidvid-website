import React from 'react';
import "./Benefits.css"

const benefits = [
  {
    img: '/Increased Ad Revenue Desktop.png',
    title: 'Increased Ad Revenue',
    description:
      'Enhance your campaign’s return on ad spend (ROAS) by targeting impressions that yield the best results for your online business. This service is available across major DSPs and inventory channels.',
  },
  {
    img: '/Actionable Insights Desktop.png',
    title: 'Actionable Insights',
    description:
      'Detailed reporting and analytics empower publishers to make informed decisions about inventory, pricing, and monetisation strategies.',
  },
  {
    img: '/Simplified Operations Desktop.png',
    title: 'Simplified Operations',
    description:
      'BidVid’s automated, self-optimising platform eliminates manual bid management, allowing publishers to focus on content creation and audience development.',
  },
  {
    img: '/Improved User Experience Desktop.png',
    title: 'Improved User Experience',
    description:
      'By dynamically adjusting key auction parameters, BidVids ensures that ads are correctly sized, timed, and targeted, creating a seamless and non-intrusive experience for the publisher’s audience.',
  },
];

const Benefits = () => {
  return (
    <div className="bg-darkBlue text-white py-16 font-sans ">
      {/* <div className="max-w-9xl ml-4 sm:ml-8 lg:ml-20 xl:ml-24 2xl:ml-28 lg:mt-16 xl:mt-20 2xl:mt-24 text-left lg:mb-12 xl:mb-12 2xl:mb-12 benefits-parent "> */}
      <div className="max-w-9xl benefits-parent ">
        <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-6 benefits-text ">
          Benefits
        </h2>
        <div className="max-w-8xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-28 gap-y-12 sm:gap-y-12 pr-12 ml-8 sm:ml-4 benefits-container">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start max-w-[535px]">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 mb-6"
              />
              <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

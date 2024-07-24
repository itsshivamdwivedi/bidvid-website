import React from 'react';

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
    <div className="bg-darkBlue text-white py-16 font-sans">
      
      <div className="max-w-5xl ml-2 sm:ml-8 lg:ml-20 lg:mt-16 text-left lg:mb-20">
        
        <h2 className="text-3xl font-bold mb-10 l-4 sm:ml-4">Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-28 gap-y-24 pr-12 ml-8 sm:ml-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-start">
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-16 h-16 mb-6"
              />
              <h3 className="text-lg font-semibold mb-4">{benefit.title}</h3>
              <p className="text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

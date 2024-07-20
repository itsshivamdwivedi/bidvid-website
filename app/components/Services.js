"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'; // Updated import for Heroicons v2

const servicesData = [
  {
    id: 1,
    title: '1.Real-Time Bid Optimization',
    description: `Our advanced AI algorithms analyse each ad request in real time, dynamically adjusting key parameters such as CPM floor, auction timeout rate, participating bidders, and allowed ad sizes. This ensures the highest possible yield from every ad impression.`,
    features: [
      'Dynamic adjustment of auction parameters',
      'Real-time analysis of user behavior and market conditions',
      'Seamless integration with your existing ad tech stack',
    ],
    image: '/Real-Time Bid Optimization Desktop.png',
  },
  {
    id: 2,
    title: '2.Maximize Return on Ad Spend (ROAS)',
    description: `Boost your campaign’s return on ad spend (ROAS) by targeting impressions that yield the most beneficial results for your online business. Our solution is compatible with leading DSPs and inventory channels, ensuring broad reach and effective optimization.`,
    features: [
      'Enhanced ROAS through AI-driven targeting',
      'Focus on high-impact impressions',
      'Available across multiple DSPs and inventory channels',
    ],
    image: '/Maximize Return on Ad Spend (ROAS) Desktop.png',
  },
  {
    id: 3,
    title: '3.Customization Reporting & Analytics',
    description: `Get detailed insights into your campaign performance with our advanced reporting and analytics tools. Customize reports to suit your business needs and make data-driven decisions to optimize your ad strategy.`,
    features: [
      'Detailed, customizable reporting',
      'Granular performance analytics',
      'Full visibility into optimization processes',
    ],
    image: '/Customization Reporting & Analytics Desktop.png',
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null); // Initial state is null to have all dropdowns closed

  const toggleService = (service) => {
    if (activeService && activeService.id === service.id) {
      setActiveService(null); // Close the dropdown if it is already active
    } else {
      setActiveService(service); // Open the selected dropdown
    }
  };

  return (
    <section className="bg-white text-primary p-8">
      {/* Desktop Design */}
      <div className="hidden md:flex max-w-7xl mx-auto flex-col md:flex-row items-start justify-between font-sans">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold ml-8 mb-4">Our Services</h2>
          <div className="space-y-4">
            {servicesData.map(service => (
              <div key={service.id} className="p-4 border-b">
                <div
                  className={`flex justify-between items-center cursor-pointer p-4 text-justify ${activeService && activeService.id === service.id ? 'bg-darkBlue text-white' : 'bg-transparent text-darkBlue'}`}
                  onClick={() => toggleService(service)}
                >
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>
                  {activeService && activeService.id === service.id ? (
                    <ChevronUpIcon className="h-5 w-5 text-white" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-darkBlue" />
                  )}
                </div>
                {activeService && activeService.id === service.id && (
                  <div className="mt-4 font-sans text-justify">
                    <p>{service.description}</p>
                    <h4 className="mt-4 font-semibold">Key Features</h4>
                    <ul className="list-disc list-inside">
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-80 pt-36 md:mt-0 flex justify-center">
          <div className="transition-transform mt-0">
            {activeService && <Image src={activeService.image} alt={activeService.title} width={400} height={400} />}
          </div>
        </div>
      </div>
      
      {/* Mobile Design */}
      <div className="flex md:hidden flex-col items-start justify-between font-sans">
        <h2 className="text-3xl font-bold ml-4 mb-4">Our Services</h2>
        <div className="space-y-8">
          {servicesData.map(service => (
            <div key={service.id} className="p-4 border-b">
              <div className="flex flex-col items-start text-left">
                <Image src={service.image} alt={service.title} width={300} height={300} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <h4 className="font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

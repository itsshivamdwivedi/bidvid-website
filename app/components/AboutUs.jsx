import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import './AboutUs.css';
import Navbar from './Navbar';
import ExportedImage from 'next-image-export-optimizer';

const teamMembers = [
  { name: 'Rajkumar Remalli', title: 'Founder & CEO', image: '/rajkumar.png' },
  { name: 'Amarnath', title: 'Head of Programmatic', image: '/amarnath.png' },
  { name: 'Alok Shenoy', title: 'Co-founder & CTO', image: '/alok.png' },
  { name: 'Shreya R', title: 'Manager Australia', image: '/shreya.png' },
  { name: 'Bryan Edwin', title: 'Client Service', image: '/bryan.png' },
  { name: 'Manish Parwal', title: 'Director', image: '/manish.png' },
  { name: 'Anujita Jain', title: 'Director', image: '/anujita.png' },
];

const AboutUs = () => {
  return (
    <>
      <div className="parent-container bg-darkBlue hidden md:block">
        <div className="containers text-white">
          <div className="contentContainer">
            <div className="textContainer">
              <h2>About Us</h2>
              <p>
                At BidVids, we're revolutionizing the world of programmatic advertising with our AI-powered optimization platform. Our mission is to help digital media buyers maximize their advertising yield while enhancing user experience. We leverage cutting-edge technology to provide real-time optimization, predictive modeling, and actionable insights tailored to meet the unique needs of digital publishers.
              </p>
            </div>
            <div>
              <ExportedImage
                src="/Robot.png"
                alt="Robot"
                width={177.23}
                height={264}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Design */}
      <div className="bg-darkBlue p-4 w-full h-[399px] m-auto md:hidden">
        <div className="text-white">
          <h2 className="text-xl">About Us</h2>
          <p className="mt-4 m_p">
            At BidVids, we're revolutionizing the world of programmatic advertising with our AI-powered optimization platform. Our mission is to help digital media buyers maximize their advertising yield while enhancing user experience. We leverage cutting-edge technology to provide real-time optimization, predictive modeling, and actionable insights tailored to meet the unique needs of digital publishers.
          </p>
        </div>
      </div>
      <div className="custom-content-container hidden md:block">
        <div className="custom-flex-container">
          <div className="custom-box custom-left-box">
            <ExportedImage src="/story.svg" width={56.12} height={68} alt="Left Image" className="custom-box-image" />
            <h2>Our Story</h2>
            <p>Founded by industry veterans with decades of experience, BidVids was born out of a passion for innovation and excellence in digital advertising. Our team comprises experts who have been at the forefront of media and technology, bringing together a wealth of knowledge and expertise to create solutions that drive success for our clients.</p>
          </div>
          <div className="custom-box custom-right-box">
            <ExportedImage src="/aim.svg" width={56.12} height={68} alt="Right Image" className="custom-box-image" />
            <h2>Our Vision</h2>
            <p>At BidVids, we envision a future where digital advertising is seamlessly optimized by AI, delivering maximum revenue. Our commitment to innovation and excellence drives us to continuously improve our platform, ensuring our clients stay ahead in a rapidly evolving industry.</p>
          </div>
        </div>
      </div>
      {/* mobile design */}
      <div className="mobile-content-container block md:hidden">
        <div className="mobile-box">
          <ExportedImage src="/story.svg" width={56.12} height={68} alt="Left Image" />
          <h2>Our Story</h2>
          <p>
            Founded by industry veterans with decades of experience, BidVids was born out of a passion for innovation
            and excellence in digital advertising. Our team comprises experts who have been at the forefront of media
            and technology, bringing together a wealth of knowledge and expertise to create solutions that drive
            success for our clients.
          </p>
        </div>
        <div className="mobile-box">
          <ExportedImage src="/aim.svg" width={56.12} height={68} alt="Right Image" />
          <h2>Our Vision</h2>
          <p>
            At BidVids, we envision a future where digital advertising is seamlessly optimized by AI, delivering
            maximum revenue. Our commitment to innovation and excellence drives us to continuously improve our
            platform, ensuring our clients stay ahead in a rapidly evolving industry.
          </p>
        </div>
      </div>
    
    
      <div className="parent-team-container">
        <div className="team-container">
          <h2 className="team-header">Our Team</h2>
          <div className="team-members">
            {/* First row with 3 members */}
            <div className="member-row">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div className="member-box" key={index}>
                  <ExportedImage src={member.image} alt={member.name} className="member-image" width={113} height={113} />
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </div>
              ))}
            </div>

            {/* Second row with 4 members */}
            <div className="member-row2">
              {teamMembers.slice(3).map((member, index) => (
                <div className="member-box" key={index + 3}>
                  <ExportedImage src={member.image} alt={member.name} className="member-image" width={113} height={113} />
                  <div className="member-name">{member.name}</div>
                  <div className="member-title">{member.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

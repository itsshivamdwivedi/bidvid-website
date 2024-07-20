import Image from 'next/image';
import Services from './components/Services';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import FooterComponent from './components/FooterComponent';
import HeroSection from './components/HeroSection';


export default function Home() {
  return (
    <>
      
      {/* <main className="bg-darkBlue text-white h-90 flex flex-col md:flex-row items-center justify-between p-8">
        <div className="text-center md:text-left max-w-2xl md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">Revolutionizing Bidding with AI-Powered Optimization</h1>
          <p className="text-lg mb-6">
            BidVid is a cutting-edge ad technology platform that uses advanced AI algorithms to optimize advertising yield for digital media buyers. Boost revenue and enhance user experience seamlessly.
          </p>
          <button className="bg-white text-primary py-2 px-4 rounded-lg font-semibold">Contact Us</button>
        </div>
      <div className="mt-24  ml-32 pl-60 md:mt-0 md:w-1/2 flex ">
          <Image src="/banner.png" alt="Robot Hand Image" width={400} height={400} />
        </div>
      </main> */}
      {/* <section className="bg-white text-primary p-8">
        <div className="max-w-4xl mx-auto">
        Hello
        </div>
      </section> */}
      <HeroSection />
       <Services />
       <Benefits />
       <ContactForm />
       <FooterComponent />
    </>
  );
}




import Image from 'next/image';
import './ContactForm.css';

export default function Contact() {
  return (
    <div className="container">
      <div className="form">
        <h1><b>Contact Us</b></h1>
        <form action='post'>
        <div className="inputgroup">
          <input type="text" required />
          <label>Enter Your Name*</label>
        </div>
        <div className="inputgroup">
          <input type="tel" required />
          <label>Enter Your Number*</label> 
        </div>
        <div className="inputgroup">
          <textarea required></textarea>
          <label>Write Your Message</label>
        </div>
        </form>
        <button className="button">Submit</button>
        <div className="call">
          <span><img src="/call.webp" width="58px" alt="call" /></span>
          <span className="number">9635462536</span>
        </div>
        <div className="gmail">
          <span><img src="/email.webp" width="58px" alt="email" /></span>
          <span className="email">support.sugarloger@gmail.com</span>
        </div>
      </div>
      <div className="image">
        <Image src="/robot.png" layout="fixed" width={700} height={400} alt="robot" />
      </div>
    </div>
  );
}

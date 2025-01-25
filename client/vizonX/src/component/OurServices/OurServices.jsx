import "./OurServices.css";
import img1 from "../../../public/c61fc7f0e241dbd7edb85b791260292d.png";
import img2 from "../../../public/5a6bf1b9f3373c5a8c266a4489d79ec3.png";
import img3 from "../../../public/56d0e79c85a4a2867be55942814d4dd0.png";
import img4 from "../../../public/708d402be9532f95db9cbf87c3fb0e93.png";

const OurServices = () => {
  return (
    <>
      <div className="ourServiceDiv">
        <p className="mainP">Our Services</p>
        <div className="flexDiv">
          <div>
            <img className="imgs" src={img1} alt="img" />
            <p className="Otopic">SEO</p>
            <p className="ODetails">
              We specialize in driving organic traffic and improving search
              engine rankings through comprehensive, results-driven SEO
              strategies.
            </p>
            <button className="Obtns">Go To</button>
          </div>
          <div>
            <img className="imgs" src={img2} alt="img" />
            <p className="Otopic">Email Marketing</p>
            <p className="ODetails">
              We specialize in creating highly effective email marketing
              campaigns that engage your audience, nurture leads, and drive
              conversions.
            </p>
            <button className="Obtns">Go To</button>
          </div>
          <div>
            <img className="imgs" src={img3} alt="img" />
            <p className="Otopic">Social Media Ads</p>
            <p className="ODetails">
              We have expertise in creating impactful social media advertising
              campaigns that drive results.
            </p>
            <button className="Obtns">Go To</button>
          </div>
          <div>
            <img className="imgs" src={img4} alt="img" />
            <p className="Otopic">Copy Writing</p>
            <p className="ODetails">
              We develop strategic copy that aligns with your brand voice and
              resonates with your target audience.
            </p>
            <button className="Obtns">Go To</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurServices;

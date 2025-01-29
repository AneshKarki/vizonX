import image from "../../../public/033560eb89e398210453e313ec558109.png";
import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage" id="Home">
        <NavBar />
        <div className="insidelandingPage">
          <div className="text">
            <p
              className="text1"
            >
              VizonX Marketing Agency
            </p>
            <p
              className="text2"
            >
              <span>Elevate your Brand with Innovative Marketing Solutions</span>
            </p>
            <p
              className="text3"
            >
              Transform your brand with innovative marketing solutions tailored
              to your goals. At VizonX Marketing Agency, we drive growth through
              strategy, creativity, and measurable results your success is our
              mission!
            </p>
            <div className="btns">
              <button className="btns1">Learn More</button>
              <button className="btns2">Book Your Free Audit</button>
            </div>
          </div>
          <div className="imageDiv">
            <img className="image" src={image} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;

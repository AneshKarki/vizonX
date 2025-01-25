import image from "../../../public/033560eb89e398210453e313ec558109.png";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div className="insidelandingPage">
          <div className="text">
            <p
              className="text1"
              style={{
                fontFamily: " Inria Sans",
                fontSize: "60px",
                fontweight: "700",
                lineheight: "71.94px",
                textalign: "left",
                textunderlineposition: "from-font",
                textdecorationskipink: "none",
                color: "#2609A6",
              }}
            >
              VizonX Marketing Agency
            </p>
            <p
              className="text2"
              style={{
                fontfamily: "Inria Sans",
                fontsize: "20px",
                fontweight: " 400",
                lineheight: "23.98px",
                textalign: "left",
                textunderlineposition: "from-font",
                textdecorationskipink: "none",
              }}
            >
              Elevate your Brand with Innovative Marketing Solutions
            </p>
            <p
              className="text3"
              style={{
                fontfamily: "Inria Sans",
                fontsize: "15px",
                fontweight: "400",
                lineheight: "17.99px",
                textalign: "left",
                textunderlineposition: "from-font",
                textdecorationskipink: "none",
              }}
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
          <div className="imagess">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;

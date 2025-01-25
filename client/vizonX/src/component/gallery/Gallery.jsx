import "./Gallery.css";
import img1 from "../../../public/222c404bcb98a484758115eba0526c29.png";
const Gallery = () => {
  return (
    <>
      <div className="GmainDiv">
        <p className="Pgallery">Gallery</p>
        <div className="Gflex">
          <div className="Gimg1">
            <img className="Ginsideimg" src={img1} alt="img" />
          </div>
          <div className="Gimg2">
            <p className="Gp1">
              Elevate Your Brand with Stunning Email Designs
            </p>
            <p className="Gp2">Transforming Emails into Experiences</p>
            <p className="Gp3">
              Discover our professionally designed email templates that
              captivate your audience and boost engagement. Our creative
              solutions ensure your messages stand out, driving higher
              conversions and strengthening your brand identity.
            </p>
            <button className="Gb1">Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;

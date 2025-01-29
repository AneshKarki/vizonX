import "./NavBar.css";
import logoVx from "/Logo.png";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <>
      <div className="mainDiv">
        <img className="logoVx" src={logoVx} alt="vizonX"></img>
        <div className="innerDiv">
          <div>
            <Link to="Services" smooth={true} duration={500}>
              Services
            </Link>
          </div>
          <div>
          <Link to="Gallery" smooth={true} duration={500}>
            Gallery
          </Link>
          </div>
          <div>
          <Link to="Services" smooth={true} duration={500}>
            Projects
          </Link>
          </div>
          <div>
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;

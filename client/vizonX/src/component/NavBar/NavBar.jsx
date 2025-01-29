import "./NavBar.css";
import logoVx from "/Logo.png";

const NavBar = () => {
  return (
    <>
      <div className="mainDiv">
        <img className="logoVx" src={logoVx} alt="vizonX"></img>
        <div className="innerDiv">
          <div>
            <a>Services</a>
          </div>
          <div>
            <a>Gallery</a>
          </div>
          <div>
            <a>Projects</a>
          </div>
          <div>
            <a>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;

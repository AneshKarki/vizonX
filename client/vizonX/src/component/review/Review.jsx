import "./Review.css";
import { FaRegSmile } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";

const Review = () => {
  return (
    <>
      <div className="ReviewMainDiv">
        <div className="Ricons">
          <div>
            <span>
              <FaRegSmile />
            </span>
            <span>80</span>
            <div style={{ fontSize: "35px" }}> Happy Customers</div>
          </div>
          <div>
            <span>
              <LuClock9 />
            </span>
            <span>500Hr</span>
            <div style={{ fontSize: "35px" }}> Work Time</div>
          </div>
        </div>
        <div className="RtextDiv">
          <p style={{ fontSize: "28px", padding: "20px", textAlign: "center" }}>
            Working with VizionX has been a game-changer for our business. Their
            marketing strategies have significantly increased our online
            visibility and sales.
          </p>
          <button className="Rbtns">Name here</button>
        </div>
      </div>
    </>
  );
};
export default Review;

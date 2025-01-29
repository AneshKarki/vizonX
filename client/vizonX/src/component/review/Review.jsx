import "./Review.css";
import { FaRegSmile } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";

const Review = () => {
  return (
    <>
      <div className="ReviewMainDiv" id="Review">
        <div className="Ricons">
          <div>
            <span>
              <FaRegSmile />
            </span>
            <span>80</span>
            <div style={{ fontSize: "35 px" }}> Happy Customers</div>
          </div>
          <div>
            <span>
              <LuClock9 />
            </span>
            <span>500Hr</span>
            <div style={{ fontSize: "35 px" }}> Work Time</div>
          </div>
        </div>
        <div className="RtextDiv">
          <p style={{ fontSize: "28 px", padding: "20 px", textAlign: "center" }}>
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

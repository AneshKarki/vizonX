import "./WorkWithUs.css";
import { RiShoppingBagLine } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { HiOutlineTrophy } from "react-icons/hi2";

const WorkWithUs = () => {
  return (
    <>
      <div className="workWithUsMain">
        <p className="textW1">Why Work With Us?</p>
        <p className="textW2">
          We blend local insights with international standards to deliver
          exceptional marketing solutions that resonate both in Nepal and around
          the world.
        </p>
        <div className="wwUmainDiv">
          <div>
            <div className="icons">
              <RiShoppingBagLine />
            </div>
            <div className="boxDiv">
              <p className="textW3">Experience</p>
              <p className="textW4">
                Whether you’re a small local business or a growing international
                company, our services are designed to scale with your needs,
                providing consistent support.
              </p>
            </div>
          </div>
          <div>
            <div className="icons">
              <BiBarChartSquare />
            </div>
            <div className="boxDiv">
              <p className="textW3">Flexibility</p>
              <p className="textW4">
                We prioritize strategies that drive high-quality leads and
                conversions, maximizing your spend for the best possible
                outcomes.
              </p>
            </div>
          </div>
          <div>
            <div className="icons">
              <HiOutlineTrophy />
            </div>
            <div className="boxDiv">
              <p className="textW3">Results</p>
              <p className="textW4">
                With years of experience in the marketing industry, we have
                honed our skills and knowledge to provide top-notch services
                that drive results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkWithUs;

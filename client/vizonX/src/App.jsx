import LandingPage from "./component/LandingPage/LandingPage";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import OurServices from "./component/OurServices/OurServices";
import Gallery from "./component/gallery/Gallery";
import Review from "./component/review/Review";
import Meeting from "./component/meeting/Meeting";
import "./App.css";

function App() {
  return (
    <>
      <LandingPage />
      <WorkWithUs />
      <OurServices />
      <Gallery />
      <Review />
      <Meeting />
    </>
  );
}

export default App;

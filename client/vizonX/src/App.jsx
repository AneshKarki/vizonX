import NavBar from "./component/NavBar/NavBar";
import LandingPage from "./component/LandingPage/LandingPage";
import WorkWithUs from "./component/workwithus/WorkWithUs";
import OurServices from "./component/OurServices/OurServices";
import Gallery from "./component/gallery/Gallery";
import Review from "./component/review/Review";
import Meeting from "./component/meeting/Meeting";

function App() {
  return (
    <>
      <NavBar />
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

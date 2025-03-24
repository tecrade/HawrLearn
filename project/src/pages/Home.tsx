import Banner from "../components/Banner";
import CoursesSection from "../components/CoursesSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import NavigationBar from "../components/Navbar";


function Home() {
  return (
    <div>
      <NavigationBar/>
      <Banner/>
      <CoursesSection/>
      <FeaturesSection/>
      <Footer/>
    </div>
  );
}

export default Home;
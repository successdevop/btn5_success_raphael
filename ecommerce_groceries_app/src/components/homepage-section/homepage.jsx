import FirstSection from "./firstSection/index";
import SecondSection from "./secondSection/index";
import ThirdSection from "./thirdSection/index";
import FourthSection from "./fourthSection/index";
import FifthSection from "./fifthSection/index";
import SixthSection from "./sixthSection/index";
import SeventhSection from "./seventhSection/index";
import EightSection from "./eightSection/index";
import Header from "../header-section/Header";
import Footer from "../footer-section/Footer";
import Navbar from "../header-section/Navbar";

function Main() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
      </main>
      <Footer />
    </>
  );
}

export default Main;

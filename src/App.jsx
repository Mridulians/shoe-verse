import Achieve from "./components/achievements/Achieve";
import BannerSlider from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Collection from "./components/collection/Collection";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Testtimonial from "./components/testimonials/Testtimonial";

function App() {
  return (
    <>
      <Header />
      <BannerSlider />
      <Achieve />
      <Collection />
      <Testtimonial />
      <Categories />

      <Footer />
    </>
  );
}

export default App;

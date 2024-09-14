import "./app.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import MySlider from "./components/MySlider";
import ProductSection from "./components/ProductSection";

/*eslint-disable*/
function App() {

  return (
    <>
      <MyNav />
      <MySlider />
      <ProductSection />
      <MyFooter />
    </>
  );
}

export default App;

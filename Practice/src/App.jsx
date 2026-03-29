import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return (
    // <div>
    //   {/* <Greet />
    //   <Header />
    //   <MainContent />
    //   <Footer /> */}
    //   {/* <WelcomeMessage/>  */}
    //   <JSXRules/>
    // </div>

    <div>
      {/* <h2>2+2 is {2 + 2}</h2> */}
      {/* <Greet /> */}
      <ProductInfo/>
    </div>
  );
};

export default App;

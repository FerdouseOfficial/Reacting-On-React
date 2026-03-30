// import React from "react";
// import Greet from "./components/Greet";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
// import WelcomeMessage from "./components/WelcomeMessage";
// import JSXRules from "./components/JSXRules";
// import ProductInfo from "./components/ProductInfo";
// import Pr_Expressions from "./components/Pr_Expressions";

// // const App = () => {
// //   return (
// //     // <div>
// //     //   {/* <Greet />
// //     //   <Header />
// //     //   <MainContent />
// //     //   <Footer /> */}
// //     //   {/* <WelcomeMessage/>  */}
// //     //   <JSXRules/>
// //     // </div>

// //     <div>
// //       {/* <h2>2+2 is {2 + 2}</h2> */}
// //       {/* <Greet /> */}
// //       {/* <ProductInfo/> */}
// //     </div>
// //   );
// // };

// const App = () => {
//   let list = [1, 2, 3, 4, 5];
//   //   return (
//   //     <div className="flex flex-col items-center">
//   //       {list.map((number) => (
//   //         <ul key={number}>
//   //           <li>{number}</li>
//   //         </ul>
//   //       ))}
//   //     </div>

//   // );
//   return (
//     <div>
//       <Pr_Expressions />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Pr_Expressions from "./components/Pr_Expressions";
import UserList from "./components/UserList";
import ProductLists from "./components/ProductLists";
import Person from "./components/Person";
import Product from "./components/Product";
import Verification from "./components/Verification";

const App = () => {
  return (
    <div>
      {/* <Pr_Expressions/> */}
      {/* <UserList/>
      <ProductLists/> */}
      {/* <Person name="Jihad" age="18" />
      <Product name="Laptop" price="1299" /> */}

      <Verification isValid={true}/> 
      
    </div>
  );
};

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Cuisine1 from "./components/Cuisine1";
import Cuisine2 from "./components/Cuisine2";
import Cuisine3 from "./components/Cuisine3";
import Cuisine4 from "./components/Cuisine4";
import Cuisine5 from "./components/Cuisine5";
const react = require("react");

function App() {
  return (
    <div>
      <Header />
      <Cuisine1 />
      <Cuisine2 />
      <Cuisine3 />
      <Cuisine4 />
      <Cuisine5 />
      <Footer />
    </div>
  );
}

export default App;

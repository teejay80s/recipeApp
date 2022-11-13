import { Card, Hero, Navbar } from "./Components";
import Category from "./Components/Category";
import Food from "./Components/Food";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Card/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;

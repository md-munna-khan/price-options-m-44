import LineCharts from "./assets/components/linechart/LineCharts";
import LineChart from "./assets/components/linechart/LineCharts";
import Navbar from "./assets/components/navbar";
import Phones from "./assets/components/phones/Phones";
import PriceOptions from "./assets/components/priceOptions/PriceOptions";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
    <PriceOptions></PriceOptions>
   <LineCharts></LineCharts>
   <Phones></Phones>
    </div>
  );
};

export default App;
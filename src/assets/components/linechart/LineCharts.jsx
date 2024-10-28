import { LineChart, Line, XAxis, YAxis } from "recharts";

const LineCharts = () => {
 const markData= [
    { id: 1, name: "Alice", math: 78 },
    { id: 2, name: "Bob", math: 85 },
    { id: 3, name: "Charlie", math: 92 },
    { id: 4, name: "Daisy", math: 65 },
    { id: 5, name: "Ethan", math: 88 },
    { id: 6, name: "Fiona", math: 91 },
    { id: 7, name: "George", math: 74 },
    { id: 8, name: "Hannah", math: 89 },
    { id: 9, name: "Ian", math: 81 },
    { id: 10, name: "Jill", math: 95 }
  ];
      
    return (
        <div>
         <LineChart width={1000} height={400} data={markData}>
<XAxis dataKey={'name'}></XAxis>
<YAxis></YAxis>
<Line dataKey={"math"} stroke="green"></Line>
         </LineChart>
        </div>
    );
};

export default LineCharts;
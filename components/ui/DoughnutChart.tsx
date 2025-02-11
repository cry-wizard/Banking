"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
  const data={
    datasets:[
    {
      label:"Banks",
      data:[1250,2500,300],
      backgroundColor:['#0747b6','#2265d8','#2f91fa']
    }
  ],
  labels:['Banks 1','Banks 2','Banks 3']
}
  return <Doughnut
  data={data} 
  options={{
    cutout:'50%',
    plugins:{
      legend:{
        display:false
      }
    }
  }}
  />
}

export default DoughnutChart
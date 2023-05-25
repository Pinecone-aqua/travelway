import { Bar, Doughnut } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  BarElement,
  Legend,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
interface popular {
  name: string;
  count: number;
}

export default function Statistic() {
  const [story, setStory] = useState<popular[]>();
  const [province, setProvince] = useState<popular[]>();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACK_END_URL}/stories/static`)
      .then((response) => response.data)
      .then((res) => setStory(res));
  }, []);
  console.log("story", story);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BACK_END_URL}/stories/prostatic`)
      .then((response) => response.data)
      .then((res) => setProvince(res));
  }, []);
  console.log("province", province);

  const ingredientData = {
    labels: story?.map((st: { name: string }) => st.name),
    datasets: [
      {
        label: "# of Votes",
        data: story?.map((st: { count: number }) => st.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const provinceData = {
    labels: province?.map((us: { name: string }) => us.name),
    datasets: [
      {
        fill: true,
        label: "story",
        data: province?.map((us: { count: number }) => us.count),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="children">
      <div className="w-full flex justify-center gap-5">
        <div className="w-1/2 p-5">
          <h5>story</h5>
          <Doughnut data={ingredientData} updateMode={"reset"} redraw={true} />
        </div>
        <div className="w-1/2">
          <h5>province</h5>
          <Bar data={provinceData} />
        </div>
      </div>
    </div>
  );
}

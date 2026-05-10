import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";

import { TimelineContext } from "../components/context/context";

const Stats = () => {
  const { timelineData } = useContext(TimelineContext);
  const call = timelineData.filter((item) => item.action === "Call").length;
  const message = timelineData.filter((item) => item.action === "Text").length;
  const video = timelineData.filter((item) => item.action === "Video").length;

  const data = [
    { name: "Call", value: call, fill: "green" },
    { name: "Text", value: message, fill: "purple" },
    { name: "Video", value: video },
  ];

  return (
    <div className="bg-base-200  px-10 lg:px-40 pb-15">
      <h1 className="font-bold text-4xl py-10">Friendship Analytics</h1>
      <div className="shadow p-10 rounded-md border border-slate-300 container mx-auto bg-base-100">
        <h2 className="font-semibold text-lg mb-16">
          By Interaction Type
        </h2>
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            margin: "auto",
            aspectRatio: 1,
          }}
          responsive
        >
          <Pie
            data={data}
            innerRadius="80%"
            outerRadius="100%"
            // Corner radius is the rounded edge of each pie slice
            cornerRadius="50%"
            fill="#8884d8"
            // padding angle is the gap between each pie slice
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          />
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Stats;

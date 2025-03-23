import { AreaChart, LineChart } from "@mantine/charts";
import React from "react";
import DefaultCard from "../global/DefaultCard";

interface Props {
  chartData: {
    semester: string;
    semesterAverage: number;
    overallAverage: number;
  }[];
}

const ChartBox = ({ chartData }: Props) => {
  const data = chartData.map((entry) => ({
    date: entry.semester,
    "Semester Average": entry.semesterAverage,
    "Overall Average": entry.overallAverage,
  }));

  return (
    <DefaultCard title="My Progress">
      <LineChart
        h={220}
        data={data}
        dataKey="date"
        yAxisLabel="Grade"
        series={[
          { name: "Semester Average", color: "teal.6" },
          { name: "Overall Average", color: "indigo.6" },
        ]}
        curveType="linear"
        withLegend
      />
    </DefaultCard>
  );
};

export default ChartBox;

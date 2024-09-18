import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LabelList, Pie, PieChart } from "recharts";
import React from "react";

const ChartWallet = ({ chartConfig, chartData }: { chartConfig: any,chartData:any }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square h-full"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="assets" hideLabel />}
        />
        <Pie data={chartData} dataKey="value" nameKey="assets" fill="fill">
          <LabelList
            dataKey="assets"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) =>
              chartConfig[value]?.label
            }
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
};

export default ChartWallet;

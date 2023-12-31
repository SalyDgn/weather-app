import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "./mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false, weatherData}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: 'rgba(255, 255, 255, .5)',
            },
          },
          legend: {
            text: {
              fill: 'rgba(255, 255, 255, .5)',
            },
          },
          ticks: {
            line: {
              stroke: 'rgba(255, 255, 255, .5)',
              strokeWidth: 1,
            },
            text: {
              fill: 'rgba(255, 255, 255, .5)',
            },
          },
        },
        legends: {
          text: {
            fill: 'rgba(255, 255, 255, .5)',
          },
        },
        tooltip: {
          container: {
            color: 'rgba(255, 255, 255, .5)',
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{
        type: "linear",
        min: "00",
        max: "23",
        stacked: true,
        reverse: false,
      }}
      yScale={{
        type: "linear",
        min: "0",
        max: "100",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "timestamp", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "temperature/humidity", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;

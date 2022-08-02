import React from 'react'
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  IAccLoadedEventArgs,
  AccumulationTheme,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";

const Pie = () => {
  return (
    <AccumulationChartComponent
      id="pie-chart"
      title="Mobile Browser Statistics"
      legendSettings={{ visible: false }}
      enableSmartLabels={true}
      enableAnimation={false}
      center={{ x: "50%", y: "50%" }}
      tooltip={{
        enable: true,
        format: "${point.x} : <b>${point.y}%</b>",
      }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
          AccumulationDataLabel,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          name="Browser"
          xName="x"
          yName="y"
          explode={true}
          explodeOffset="10%"
          explodeIndex={0}
          dataLabel={{
            visible: true,
            position: "Inside",
            name: "text",
            font: {
              fontWeight: "600",
            },
          }}
          radius="70%"
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default Pie
import React from 'react'
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { Layout, Header } from "../../components";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  return (
    <Layout>
      <Header category="Chart" title="Pyramid"></Header>
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          title="Food Comparison Chart"
          legendSettings={{
            visible: false,
          }}
          tooltip={{
            enable: true,
            format: "${point.x} : <b>${point.y} cal</b>",
          }}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode={true}
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
              }}
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </Layout>
  );
};

export default Pyramid
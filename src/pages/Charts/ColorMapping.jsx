import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Highlight,
  DataLabel,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import { Browser } from "@syncfusion/ej2-base";

import { Layout, Header } from "../../components";
import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";

const ColorMapping = () => {
  return (
    <Layout>
      <Header category="Chart" title="Color Mapping"></Header>
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          highlightMode="Point"
          highlightPattern="DiagonalForward"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          title="USA CLIMATE - WEATHER BY MONTH"
          chartArea={{ border: { width: 0 } }}
          width={Browser.isDevice ? "100%" : "80%"}
          legendSettings={{
            mode: "Range",
            visible: true,
            toggleVisibility: false,
          }}
        >
          <Inject
            services={[
              ColumnSeries,
              Highlight,
              DataLabel,
              Tooltip,
              Category,
              Legend,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              animation={{ enable: false }}
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
              marker={{ dataLabel: { visible: true, position: "Outer" } }}
            ></SeriesDirective>
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective
                key={index}
                {...item}
              ></RangeColorSettingDirective>
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </Layout>
  );
};

export default ColorMapping
import React from 'react'

import { Layout, Header } from "../../components";
import { Browser } from "@syncfusion/ej2/base";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { StackedColumnsData, StackedColumnsSeries } from "../../data/dummy";

const Stacked = () => {
  return (
    <Layout>
      <Header category="Chart" title="Stacked Columns"></Header>
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            labelIntersectAction: "Rotate45",
            valueType: "Category",
          }}
          primaryYAxis={{
            title: "Sales",
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 500,
            interval: 100,
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: "{value}B",
          }}
          width={Browser.isDevice ? "100%" : "60%"}
          chartArea={{ border: { width: 0 } }}
          title="Mobile Game Market by Country"
          tooltip={{ enable: true }}
        >
          <Inject
            services={[StackingColumnSeries, Category, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            {StackedColumnsData.map((item, index) => (
              <SeriesDirective
                key={index}
                dataSource={item}
                {...StackedColumnsSeries[index]}
              ></SeriesDirective>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </Layout>
  );
};
export default Stacked
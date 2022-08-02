import React from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  AxesDirective,
  AxisDirective,
  CandleSeries,
  Category,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  ColumnSeries,
  Crosshair,
  StripLine,
  RowDirective,
  RowsDirective,
  SeriesDirective,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { Layout, Header } from "../../components";
import { chartData } from "../../data/stock-chart-data";
import { Browser } from "@syncfusion/ej2-base";

const Financial = () => {
  return (
    <Layout>
      <Header category="Candle Chart" title="AAPL Historical"></Header>
      <div className="w-full">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "DateTime",
            crosshairTooltip: { enable: true },
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            title: "Volume",
            rangePadding: "None",
            valueType: "Logarithmic",
            opposedPosition: true,
            majorGridLines: { width: 1 },
            lineStyle: { width: 0 },
            stripLines: [
              {
                end: 1300000000,
                startFromAxis: true,
                text: "",
                color: "black",
                visible: true,
                opacity: 0.03,
                zIndex: "Behind",
              },
            ],
          }}
          tooltip={{
            enable: true,
            shared: true,
          }}
          width={Browser.isDevice ? "100%" : "80%"}
          crosshair={{ enable: true, lineType: "Vertical" }}
          // pointRender={this.renderPoint.bind(this)}
          // axisLabelRender={this.axisLabelRender.bind(this)}
          // sharedTooltipRender={this.sharedTooltipRender.bind(this)}
          chartArea={{ border: { width: 0 } }}
          zoomSettings={{
            enableMouseWheelZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true,
            enablePan: true,
          }}
        >
          <Inject
            services={[
              CandleSeries,
              StripLine,
              Category,
              Tooltip,
              DateTime,
              Zoom,
              ColumnSeries,
              Logarithmic,
              Crosshair,
            ]}
          />
          <RowsDirective>
            <RowDirective height={"30%"}></RowDirective>
            <RowDirective height={"70%"}></RowDirective>
          </RowsDirective>
          <AxesDirective>
            <AxisDirective
              name="secondary"
              opposedPosition={true}
              rowIndex={1}
              majorGridLines={{ width: 1 }}
              labelFormat="n0"
              title="Price"
              plotOffset={30}
              lineStyle={{ width: 0 }}
            ></AxisDirective>
          </AxesDirective>
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Column"
              dataSource={chartData}
              animation={{ enable: true }}
              xName="x"
              yName="volume"
              name="Volume"
            ></SeriesDirective>
            <SeriesDirective
              type="Candle"
              yAxisName="secondary"
              bearFillColor="#2ecd71"
              bullFillColor="#e74c3d"
              dataSource={chartData}
              animation={{ enable: true }}
              xName="x"
              low="low"
              high="high"
              open="open"
              close="close"
              name="Apple Inc"
              volume="volume"
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </Layout>
  );
};

export default Financial
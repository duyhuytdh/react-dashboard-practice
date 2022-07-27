import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Search,
  ExcelExport,
  PdfExport,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";
import { Header } from "../components";

const Employees = () => {
  return (
    <div className="m-2 p-2 mt-10 pt-10 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees"></Header>
      <GridComponent
        id="gridEmployees"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search", "ExcelExport"]}
        width="auto"
        allowExcelExport
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Sort,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
            Search,
            Toolbar,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees
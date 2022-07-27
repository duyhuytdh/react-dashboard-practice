import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Edit,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 p-2 mt-10 pt-10 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"></Header>
      <GridComponent
        id="gridCustomers"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Sort, Filter, Page, Edit, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Customers
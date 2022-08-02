import React from 'react'

import { Layout, Header, PieChart } from "../../components";

const Pie = () => {
  return (
    <Layout>
      <Header category="Pie Chart" title="Inflation"></Header>
      <div className="w-full">
        <PieChart />
      </div>
    </Layout>
  );
};

export default Pie
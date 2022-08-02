import React from 'react'

import { Layout, Header, LineChart } from "../../components";

const Line = () => {
  return (
    <Layout>
      <Header category="Chart" title="Inflation"></Header>
      <div className="w-full">
        <LineChart />
      </div>
    </Layout>
  );
};

export default Line
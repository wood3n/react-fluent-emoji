import React from "react";
import { Spin } from "antd";
import "./index.css";

const PageLoading = () => {
  return (
    <div className="spin">
      <Spin size="large" />
    </div>
  );
};

export default PageLoading;
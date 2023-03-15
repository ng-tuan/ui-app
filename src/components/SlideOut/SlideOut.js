import React from "react";
import logo from "../../images/logo.svg";
import Content from "../Content";
import { Tabs } from "antd";

import "./index.scss";
import { useStateHooks } from "../hooks";

export default function SlideOut() {
  const { source } = useStateHooks();

  console.log("first", source);
  return (
    <div className="slideout">
      <div className="slideout-content">
        <div className="slideout-logo">
          <img src={logo} className="d-block mx-auto" />
        </div>
        <Tabs
          className="color-white"
          defaultActiveKey="1"
          tabPosition="left"
          style={{ height: 220 }}
          items={source.employees.map((item, index) => {
            return {
              label: item.name,
              key: index,
              children: <Content data={item} />,
            };
          })}
        />
      </div>
    </div>
  );
}

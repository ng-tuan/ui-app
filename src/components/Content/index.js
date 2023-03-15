import React from "react";
import "./index.scss";
import { Slider } from "antd";

export default function Content({ data }) {
  return (
    <div className="content-container">
      <div className="content-img">
        <img src={data?.image}/>
      </div>
      <div className={`content-name size-${data?.popularity} color-white`}>{data?.name}</div>
      <div className="content-popularity d-flex align-items-center my-3">
        <span className="color-white size-2">Popularity</span>
        <Slider defaultValue={data?.popularity} style={{width: '80%'}} className='mx-3'/>
      </div>
      <div className="content-biography d-flex flex-column color-white">
        <span className="size-2">Biography</span>
        {data?.biography}
      </div>
    </div>
  );
}

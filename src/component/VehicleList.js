import React, { useState } from "react";
import { Input, Button } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const { Search } = Input;
const VehicleList = (props) => {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [toggleStyle, setToggleStyle] = useState(true);

  const selectedTab = (item, idx) => {
    props.onClick(item.points);
    setSelectedIdx(idx);
  };

  const searchCars = (e) => {
    props.searchEvent(e.target.value);
  };

  /**
   * Enable and diable the sidebar
   */
  const toggleSettings = () => {
    setToggleStyle(!toggleStyle);
  };

  return (
    <div className={`sidebar ${toggleStyle}`}>
      <Search
        placeholder="Search.."
        className="searchbar"
        onChange={(value) => searchCars(value)}
      />
      <ul>
        {props.data.map((item, index) => {
          const active = selectedIdx === index ? "active" : "";
          return (
            <li onClick={() => selectedTab(item, index)} className={active}>
              <a className="carlist">
                <span
                  className="indicate"
                  style={{ background: item.indicate }}
                ></span>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <Button
        type="primary"
        className="toggle"
        icon={toggleStyle ? <LeftOutlined /> : <RightOutlined />}
        size={"large"}
        onClick={toggleSettings}
      />
    </div>
  );
};

export default VehicleList;

import Button from "./Button";
import "./DiaryList.css";
import React from "react";

export default function DiaryList({ data }) {
  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select></select>
        </div>
        <div className="right_col">
          <Button type={"positive"} text={"새 일기 쓰기"} />
        </div>
      </div>
    </div>
  );
}

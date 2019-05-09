import React from "react";
import "./DownScroll.css";

export default function DownScroll({ smoothScroll }) {
  return (
    <div className="DownScroll">
      <div className="DownScroll-content">
        <button className="DownScroll-button" onClick={smoothScroll}>
          <i className="fas fa-chevron-down" />
        </button>
      </div>
    </div>
  );
}

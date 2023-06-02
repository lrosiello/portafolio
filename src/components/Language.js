import React from "react";


export default function Language(props) {

    
  return (
    <div className="language">
    
        <button className="spanish" size="sm" onClick={() => {props.handleLanguageChange("spanish")}} onLoad={() => {props.handleLanguageChange("spanish")}}>
             Spanish
        </button>
        <button className="english" size="sm" onClick={() => {props.handleLanguageChange("english")}}>
             English
        </button>
    
    </div>
  );
}

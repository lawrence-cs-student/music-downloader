import React from "react";
import Song from "./Songs"

export default function Results(props) {
    const downloadLink = props.link

    return (
        <div className="results">
            <Song link={downloadLink}/>
        </div>
    )
}
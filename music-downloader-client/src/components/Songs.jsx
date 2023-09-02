import React from "react";

export default function Song(props) {
    const data = props.link

    return (
        <div className="song-container">
            <div></div>
            <div>
                <p>{data.title}</p>
                <a href={data.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#699bf7" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z"/></svg>
                </a>
            </div>
        </div>
    )
}

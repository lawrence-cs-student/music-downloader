import React, {useState} from "react";

export default function Search(props) {

    const [userInput, setUserInput] = useState("");


    function HandleEnter(event) {
        if (event.key === "Enter") {
            props.function(event, userInput);
        } 
    }


    return (
        <div className="search">
            <form>
                <input
                    type="text"
                    placeholder="Search keywords or paste the url here"
                    onChange = {(event) => {setUserInput(event.target.value)}}
                    onKeyDown={HandleEnter}
                    name="title">
                </input>
            </form>
        </div>
    )
}
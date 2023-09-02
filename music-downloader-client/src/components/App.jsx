import React, {useState} from "react";
import Search from "./Search"
import Results from "./Results"



export default function App() {

  const [downloadLink, setDownloadLink] = useState("g")

  function HandleSubmit(event, userData) {
    event.preventDefault();
    const query = String(userData);
    // fetch('http://localhost:3000/api', {

    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "text/plain"
    //   },
    //   body: query
      
    // }).then(response => {
    //   if (response.ok) {
    //     console.log("success")
    //     return response.json();
    //   } else {
    //     alert("fetching error!")
    //   }
    // }).then(fetchedData => {
    //   setDownloadLink(fetchedData);
    //   console.log(fetchedData);
    // })
  }

  return (
   <div className="body">
      <Search function={HandleSubmit} />
      {downloadLink && <Results link={downloadLink} /> }
      <img src="dog.PNG"></img>
   </div>
  )
}


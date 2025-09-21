import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]); // this data i created not same as response data
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=100"
    );

    setData(response.data); // this data is the data array present inside rsponse
    //console.log(response.data)
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="p-10  ">
       
      <div className="p-6 bg-gray-200 ">
        {data.map(function (e) {
          return (
            <div>
              <img className="h-60 mb-10" src={e.download_url} alt="" />
              <h1 className="text-blue-700">{e.author}</h1>
              <h2 className="text-black-600">height : {e.height}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

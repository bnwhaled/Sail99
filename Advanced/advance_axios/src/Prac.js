import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Prac() {
  const [myData, setMyData] = useState([]);

  const getdata = async () => {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    console.log(myData);

    setMyData((prev) => data[0]);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div>{myData.id}</div>
      <img src={myData.url} alt="aa"></img>
      <div>
        size:{myData.width}x{myData.height}
      </div>
    </div>
  );
}

export default Prac;

// function Prac() {
//   const [datas, setDatas] = useState([]);
//   const getdata = async () => {
//     const { data } = await axios.get(
//       "https://api.thecatapi.com/v1/images/search"
//     );
//     console.log(datas);
//     setDatas((data) => data[0]);
//   };
//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <div>
//       <div>{datas.id} </div>
//     </div>
//   );
// }

// export default Prac;

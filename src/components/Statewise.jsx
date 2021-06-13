import React, { useEffect, useState } from "react";
import StateWiseList from "./StateWiseList";
import "../contents/style.css";




const Statewise = () => {
 
  const [state, setState] = useState([]);
  // const [search, setSearchCity] = useState("");
  

  const getState = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const result = await response.json();
    setState(result.statewise);
    console.log(result);
  };

  useEffect(() => {
    getState();
  }, []);

  return (
    <>
      

      <div>
        {state.map((curEle, i) => {
          return <StateWiseList state={curEle} key={i} id={i} />;
        })}
      </div>
    </>
  );
};

export default Statewise;

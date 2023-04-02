import React, {useState, useEffect} from "react";
import Header from "../Components/Header";
// import ImageArea from "../Components/ImageArea";
import axios from "axios";

let loopback;

function Landing() {

  const [timer, setTimer] = useState(5);
  const [newData, setNewData] = useState([])
  const [url, setUrl] = useState("http://localhost:5000")
  const [lastUpdatedOn, setLastUpdatedOn] = useState(new Date().toLocaleString());
  
  function fetchData() {
    axios.get(`${url}/get-images`).then((res) => { 
      setLastUpdatedOn(new Date().toLocaleString())
        console.log("axios called")
        setNewData(res.data.data)
    }).catch((err) => { console.log("err", err) })
  }

  const createIntervals = () => { 
    loopback = setInterval(() => {
      setTimeout(fetchData, 0);
    }, timer*1000)
  }

  const removeInterval = () => { 
    if(!loopback) return;
    clearInterval(loopback);
    createIntervals()
   }


  useEffect(() => {
    createIntervals();
   }, []);

  
   useEffect(() => {
      removeInterval()
    }, [timer])

  return (
    <>
      <Header timer={timer} setTimer={setTimer} lastUpdatedOn={lastUpdatedOn} />
      <div class="bg-white grid grid-cols-6 gap-4 text-[#00477C] mx-36 my-12 ">
      {console.log("newdat", newData)}
    { newData.map((image, index) => {
      return <img className='w-64 h-64' key={index} src={`${url}/images/${image}`} alt={`Image ${index}`} />
    })}  
      </div>
    </>
  );
}

export default Landing;
import axios from "axios";
import React, { useEffect, useState } from "react";

function HeroesDetailsPage(){

  const [heroesDetails,setHeroesDetails]=useState([])
  const [isTrain,setIsTrain]=useState(false)


  const getHeroesDetails=()=>{
     axios
      .get("https://localhost:7000/HeroesDetails")
      .then((response) => {

        setHeroesDetails(response)
        // setHeroesDetails([{name:'Jonatan',ability:''}])
      })
      .catch((err) => console.log(err));
  }
  useEffect(()=>{
   
  
  },[])

  useEffect(()=>{
    if(isTrain){

    }
  },[isTrain])

  const startTrain=(id)=>{
    axios
    .put("https://localhost:7000/HeroesDetails" ,{ id })
    .then((response)=>{
        setIsTrain(true)
    })
    .catch((err)=>console.log(err))
  }

  return (
    <>
        {heroesDetails.map((item)=>(
            <div>
            <div>{item.name}</div>
            <div>{item.ability}</div>
            <div>{item.guid}</div>
            <div>{item.suit}</div>
            <div>{item.startingPower}</div>
            <div>{item.currentPower}</div>

            {item.guid==localStorage.userNneme&&item.onceNum<5&&<button onClick={startTrain(item.id)}>התחל אימון</button>}
        </div>

         ))}
    </>
  );
}

export default HeroesDetailsPage;
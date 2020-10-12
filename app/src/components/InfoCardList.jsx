// import React, { useState } from "react";
// import MainInfoCard from "./MainInfoCard";

// export default function InfoCardList() {
//   const SAMPLE_CARDS = [
//     {
//       id: 1,
//       type: 2,
//       desc: "hello there 1",
//     },

//     {
//       id: 2,
//       type: 2,
//       desc: "hello there 2",
//     },

//     {
//       id: 3,
//       type: 2,
//       desc: "hello there 3",
//     },

//     {
//       id: 4,
//       type: 2,
//       desc: "hello there 4",
//     },
//   ];
//    const [testcards, setTest] = useState(SAMPLE_CARDS);
//   //const InfoCardList = ({ test = []}) => { 
  
//   return (
//     // <div>
//     //   {testcards.map((testcard) => {
//     //     return <MainInfoCard testcard={testcard} key={testcard.id} />;
//     //   })}
//     // </div>
//     <div>
//        {testcards.map( testcards =>( testcards.station_data))}
//     </div>

//   );
// }

import React from "react";
import MainInfoCard from "./MainInfoCard";
const realData = Array.from(this.props.dataFromParent);
const InfoCardList = ({ realData = [] }) => {
 
    return(
      realData.map(stations => (
        <MainInfoCard
        key={stations.station_data}
        ID = {stations.station_data.id}
        type = {stations.type}
        desc = {stations.description}
         />
      ))
    );
 }
export default InfoCardList;
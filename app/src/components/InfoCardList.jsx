import React, { useState } from "react";
import MainInfoCard from "./MainInfoCard";

/*export default function InfoCardList() {
  const SAMPLE_CARDS = [
    {
      id: 1,
      type: 2,
      desc: "hello there 1",
    },

    {
      id: 2,
      type: 2,
      desc: "hello there 2",
    },

    {
      id: 3,
      type: 2,
      desc: "hello there 3",
    },

    {
      id: 4,
      type: 2,
      desc: "hello there 4",
    },
  ];
  const [testcards, setTest] = useState(SAMPLE_CARDS);
  return (
    <div>
      {testcards.map((testcard) => {
        return <MainInfoCard testcard={testcard} key={testcard.id} />;
      })}
    </div>
  );
}
*/
export default function InfoCardList(props) {
  return(
    <div>
      <div>{ props.Type }</div>
      <div>{ props.lattitude }</div>
      <div>{ props.longitude }</div>
      <div>{ props.description }</div>
    </div>
  )
}
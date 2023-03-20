import React from "react";
import { usePersonalContext } from "../context/PersonalList";

const Person = () => {
  const { list } = usePersonalContext();

  return (
    <>
    <h1 className="header"> CHOOSE YOUR UNIVERSITY</h1>
    <div className="conteiner">
      {list.map((el) => (
        <diV className='person'>
          <h1>{el["name"]}</h1>
          <p key={el.domians}>
            {el.country}({el["alpha_two_code"]})
          </p>

          <a   style={{color:'white'}} href={el["web_pages"]} target="_blank">
            Go to the website
          </a>
        </diV>
      ))}
    </div></>
  );
};

export default Person;

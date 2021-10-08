import React, { useEffect, useState } from "react";
import "./list.css";

const ListOfUsers = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState(1);
  const api = `https://reqres.in/api/users?page=${value}`;
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setItems(result.data);
      });
  }, [value,api]);
  console.log(value);
  console.log(items);
  return (
    <div className="listofuser">
      {items.map((item) => (
        <div key={item.id} className="box">
          <div className="image">
            <img src={item.avatar} alt="avatar" />
          </div>
          <div className="text">
            <strong><u>{item.first_name} {item.last_name}</u></strong>
            <strong>{item.email}</strong>
          </div>
          
        </div>
      ))}
      <div className="page">
          <button onClick={()=>{if(value>1){
              setValue(value-1)
          }}}>Previous</button>
          <strong>PageNumber {value}</strong>
          <button onClick={()=>{if(value<2){
              setValue(value+1)
          }}}>Next</button>
      </div>
    </div>
  );
};

export default ListOfUsers;

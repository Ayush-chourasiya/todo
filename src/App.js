import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import UserList from "./UserList";
import "./All.css";

const getLocalUsers = () => {
  let list = localStorage.getItem("lists");
  console.log("list");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const App = () => {
  const [inputlist, setInputList] = useState("");
  const [users, setUsers] = useState(getLocalUsers());

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfUser = () => {
    setUsers((oldUSer) => {
      return [...oldUSer, inputlist];
    });
    setInputList("");
  };

  const deleteUsers = (id) => {
    console.log("deleted");
    setUsers((oldUSer) => {
      return oldUSer.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(users));
  }, [users]);

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>UserList</h1>
        <br />
        <input
          type="text"
          placeholder="Add User"
          value={inputlist}
          onChange={itemEvent}
        />
        <button className="newBtn" onClick={listOfUser}>
          +
        </button>
        <ol>
          {users.map((userval, index) => {
            return (
              <UserList
                key={index}
                id={index}
                text={userval}
                onselect={deleteUsers}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};
export default App;

import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";

const UserList = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "2px solid red",
      }}
    >
      <li style={{ marginTop: "10px" }}>{props.text}</li>
      <Button
        style={{ marginLeft: "10px" }}
        className="delete_Btn"
        varient="outlined"
        color="secondary"
        onClick={() => {
          props.onselect(props.id);
        }}
      >
        delete
      </Button>
    </div>
  );
};

export default UserList;

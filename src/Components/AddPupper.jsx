import React, { useState } from "react";
import { addNewPlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function AddPupper() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="addPupper">
      <h1>Create A New Pup!</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const addPup = await addNewPlayer(name, email, breed);
          console.log("new pup", addPup);
          nav("/");
        }}
        className="form"
      >
        <br></br>
        <br></br>
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <br></br>
        <br></br>
        <label htmlFor="breed">Breed: </label>
        <input type="text" onChange={(event) => setBreed(event.target.value)} />
        <br></br>
        <br></br>
        <button>Submit!</button>
      </form>
    </div>
  );
}

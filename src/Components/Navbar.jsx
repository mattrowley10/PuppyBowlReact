import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const [pup, setPup] = useState("");
  return (
    <div className="nav">
      <h1 className="header">The Puppy Bowl</h1>
      <ul className="nav-items">
        <li className="item">
          <button
            className="button"
            onClick={() => {
              nav(`/`);
            }}
          >
            Home
          </button>
        </li>
        <li className="item">
          <button
            className="button"
            onClick={() => {
              nav(`/player_form`);
            }}
          >
            Add New Pup!
          </button>
        </li>
        {/* <li className="item">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              nav("/searched_pup");
            }}
          >
            <label>Search:</label>
            <input type="text" placeholder="Puppy Name Here" />
            <button>Submit</button>
          </form>
        </li> */}
      </ul>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
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
        <li className="item">
          <label>
            Search:
            <input type="text" placeholder="Search" />
          </label>
        </li>
      </ul>
    </div>
  );
}

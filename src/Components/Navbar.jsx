import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <div className="nav">
      <h1 className="header">Puppy Bowl!</h1>
      <button
        className="link"
        onClick={() => {
          nav(`/`);
        }}
      >
        Home
      </button>
      <button
        className="link"
        onClick={() => {
          nav(`/player_form`);
        }}
      >
        Add New Pup!
      </button>
      <label className="link">
        Search:
        <input type="text" placeholder="Search" />
      </label>
    </div>
  );
}

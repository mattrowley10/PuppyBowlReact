import React from "react";
import { fetchSinglePlayer, removePlayer } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SinglePupper() {
  const [pup, setPup] = useState("");
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    async function getPup() {
      try {
        const onePup = await fetchSinglePlayer(id);
        setPup(onePup);
      } catch (error) {
        console.error("oops");
      }
    }
    getPup();
  }, []);

  return (
    <div className="oneCard">
      {pup && (
        <div className="single-card" key={pup.id}>
          <h2>{pup.name}</h2>
          <p>{pup.breed}</p>
          <br></br>
          <img height="300px" width="250px" src={pup.imageUrl} />
          <br></br>
          <br></br>
          <button
            className="button"
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
          <br></br>
          <br></br>
          <button
            className="button"
            onClick={async (e) => {
              await removePlayer(pup.id);
              nav("/");
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { fetchSinglePlayer } from "../api";
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
        <div className="card" key={pup.id}>
          <h2>{pup.name}</h2>
          <p>{pup.breed}</p>
          <p>{pup.email}</p>
          <p>{pup.id}</p>
          <img
            height="200px"
            width="200px"
            src="https://placedog.net/500?random"
          />
          <br></br>
          <button
            onClick={() => {
              nav("/");
            }}
          >
            Home
          </button>
        </div>
      )}
    </div>
  );
}

import React from "react";
import { useEffect, useState } from "react";
import { fetchAllPlayers } from "../api";
import { useNavigate } from "react-router-dom";

export default function AllPuppers() {
  const nav = useNavigate();
  const [pups, setPups] = useState([]);

  useEffect(() => {
    async function getAllPups() {
      try {
        const allPups = await fetchAllPlayers();
        setPups(allPups);
      } catch (error) {
        console.error(`Oops`);
      }
    }
    getAllPups();
  }, []);

  return (
    <div className="allCards">
      {pups.map((pup) => {
        return (
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
                nav(`/${pup.id}`);
              }}
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
}

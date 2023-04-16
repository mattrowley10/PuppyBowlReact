import React from "react";
import { useEffect, useState } from "react";
import { fetchAllPlayers, removePlayer } from "../api";
import { useNavigate } from "react-router-dom";

export default function AllPuppers() {
  const image = "https://placedog.net/500?";
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
  }, [pups]);

  return (
    <div className="allCards">
      {pups.map((pup) => {
        return (
          <div className="card" key={pup.id}>
            <h2>{pup.name}</h2>
            <p>{pup.breed}</p>
            <p>{pup.status}</p>
            <img src={pup.imageUrl} height="300rem" width="200rem" />
            <br></br>
            <br></br>
            <button
              onClick={() => {
                nav(`/${pup.id}`);
              }}
            >
              Details
            </button>
            <br></br>
            <br></br>
            <button
              onClick={async (e) => {
                await removePlayer(pup.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

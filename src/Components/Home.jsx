import React from "react";
import AllPuppers from "./AllPuppers";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <AllPuppers />
    </div>
  );
}

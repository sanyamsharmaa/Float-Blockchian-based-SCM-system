import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const redirect_to_roles = () => {
    history.push("/roles");
  };
  const redirect_to_addmed = () => {
    history.push("/addmed");
  };
  const redirect_to_supply = () => {
    history.push("/supply");
  };
  const redirect_to_track = () => {
    history.push("/track");
  };
  return (
    <div className="cont">
      <div className="navbar">
        <h3> Float </h3>

        <button
          onClick={redirect_to_roles}
          className="btn btn-outline-primary btn-sm"
        >
          Register
        </button>

        <button
          onClick={redirect_to_addmed}
          className="btn btn-outline-primary btn-sm"
        >
          Order 
        </button>

        <button
          onClick={redirect_to_supply}
          className="btn btn-outline-primary btn-sm"
        >
          Control Supply Chain
        </button>

        <button
          onClick={redirect_to_track}
          className="btn btn-outline-primary btn-sm"
        >
          Track 
        </button>
      </div>

      <div className="card">


        Streamline Your Supply Chain. Securely.
      </div>
    </div>
  );
}

export default Home;

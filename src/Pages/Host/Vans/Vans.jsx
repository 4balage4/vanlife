import React, { useState, useEffect } from "react";
import fetchVans from "../../../utils/fetchHostVans";
import {Link} from "react-router";

function Vans() {
  const [vans, setVans] = useState(null);

  useEffect(() => {
    const loadVans = async () => {
      const data = await fetchVans();
      setVans(data.vans);
    };
    loadVans();
  }, []);
// the server already sorts the request by the user id.



  return (
    <div className="host-vans-container">
      <h2>Your listed vans</h2>
      {vans &&
        vans.map((van) => {
          return (
            <Link to={`/host/vans/${van.id}`} className="host-van-link" key={van.id}>
            <div className="host-van-container" key={van.id}>
              <img className="host-van-image" src={van.imageUrl} alt={van.name} />
              <div className="host-van-text-container">
                <h3>{van.name}</h3>
                <p><span>${van.price}</span>/day</p>
              </div>
            </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Vans;

import { useState, useEffect } from "react";
// import useEffectOnUpdates from '../../utils/hooks/useEffectOnUpdates'
import fetchVans from "../../utils/fetchVans";
import Button from "../../components/Button";
import VanCard from "./VanCard";
import { useSearchParams, Link } from "react-router";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const loadVans = async () => {
      const data = await fetchVans();
      setVans(data.vans);
    };
    loadVans();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");


  const filteredVans = type
    ? vans.filter((van) => van.type.toLowerCase() == type)
    : vans;


  return (
    <div className="vans-container">
      <div className="vans-header-container">
        <h2 className="vans-header">Explore our van options</h2>
        <div className="button-container">
          <Button
            onClick={() => setSearchParams({ type: "simple" })}
            className={`filter ${type === "simple" ? "active" : ""}`}
          >
            Simple
          </Button>
          <Button
            onClick={() => setSearchParams({ type: "luxury" })}
            className={`filter ${type === "luxury" ? "active" : ""}`}
          >
            Luxury
          </Button>
          <Button
            onClick={() => setSearchParams({ type: "rugged" })}
            className={`filter ${type === "rugged" ? "active" : ""}`}
          >
            Rugged
          </Button>
          <Button
            onClick={() => setSearchParams("")}
            className="filter clear-filter"
            disabled={!type}
            >
            Clear filters
          </Button>
        </div>
      </div>
      <div className="vans-list-container">
        {vans &&
          filteredVans.map((van) => {
            return (
               <div className='van-card' key={van.id}>
              <Link to={van.id}
                state={{search: `?${searchParams.toString()}`}}
                className='van-card-link'>
              <VanCard
                key={van.id}
                id={van.id}
                name={van.name}
                price={van.price}
                imageUrl={van.imageUrl}
                type={van.type}
                />
                </Link>
                </div>
            );
          })}
      </div>
    </div>
  );
}

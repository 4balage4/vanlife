import React, { useEffect, useState } from "react";
import HostVanLayout from "./HostVanLayout";
import fetchHostVan from "../../../utils/fetchHostVan";
import { useParams, Link } from "react-router";

function VanCard() {
  const [currentVan, setCurrentVan] = useState(null);

  const param = useParams();

  useEffect(() => {
    const fetchVan = async () => {
      const data = await fetchHostVan(param.id);
      // console.log(data.vans[0])
      setCurrentVan(data.vans);
    };
    fetchVan();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentVan);

  return (
    <div className="host-van-details-container">
      <Link to=".." relative='path' className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {currentVan ? (
        <HostVanLayout
          imageUrl={currentVan[0].imageUrl}
          name={currentVan[0].name}
          price={currentVan[0].price}
          type={currentVan[0].type}
          description={currentVan[0].description}
          id={currentVan[0].id}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanCard;

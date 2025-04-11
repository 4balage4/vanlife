import { useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchVan from "../../utils/fetchVan";
import Button from "../../components/Button";
import { Link } from "react-router";

function VanDetail() {
  const param = useParams();
  const [van, setVan] = useState("");

  useEffect(() => {
    const loadVan = async () => {
      const data = await fetchVan(param.id);
      return setVan(data.vans);
    };
    loadVan();
  }, [param.id]);

  return (
    <div className="van-detail-container">
      <Link to="/vans">🔙 to Vans</Link>

      {van ? (
        <>
          <img src={van.imageUrl} alt={van.name} />
          <p className={`van-type ${van.type}`}>{van.type}</p>
          <h2 className="van-name">{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p className="van-description">{van.description}</p>
          <Button className="van-btn">Rent this van</Button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;

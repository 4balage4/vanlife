
import HostVanLayout from "./HostVanLayout";
import fetchHostVan from "../../../utils/fetchHostVan";
import { useParams, Link } from "react-router";
import useFetch from "../../../utils/hooks/useFetch";

function VanCard() {

  const param = useParams();

  const {data, loading, error} = useFetch(fetchHostVan, param.id)
  const currentVan = data?.vans[0] || [];
  // useEffect(() => {
  //   const fetchVan = async () => {
  //     const data = await fetchHostVan(param.id);
  //     // console.log(data.vans[0])
  //     setCurrentVan(data.vans);
  //   };
  //   fetchVan();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // console.log(currentVan);


   if (loading) {
    return <h1 aria-live="polite" className="host-van-details-container">Loading ...</h1>
  }

  if (error) {
    return <h1 aria-live="assertive" className="host-van-details-container">Error was here {error.message}</h1>
  }



  return (
    <div className="host-van-details-container">
      <Link to=".." relative='path' className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      {currentVan &&
        <HostVanLayout
          imageUrl={currentVan.imageUrl}
          name={currentVan.name}
          price={currentVan.price}
          type={currentVan.type}
          description={currentVan.description}
          id={currentVan.id}
        />
      }
    </div>
  );
}

export default VanCard;

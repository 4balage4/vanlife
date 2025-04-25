
import HostVanLayout from "./HostVanLayout";
import fetchHostVan from "../../../utils/fetchHostVan";
import { useParams, Link } from "react-router";
import useFetch from "../../../utils/hooks/useFetch";
import Loading from '../../../components/Loading'

function VanCard() {

  const param = useParams();

  const {data, loading, error} = useFetch(fetchHostVan, param.id)
  const currentVan = data || [];
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
    return <div className="host-van-details-container loading-animation">
      <Loading/>
    </div>
  }

  if (error) {

    return <div className="host-van-details-container">

     <h1 aria-live="assertive" >Error was here {error.message}</h1>
    </div>
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

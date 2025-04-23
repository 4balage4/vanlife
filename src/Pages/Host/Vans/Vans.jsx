
import fetchVans from "../../../utils/fetchHostVans";
import {Link} from "react-router";
import useFetch from '../../../utils/hooks/useFetch'

function Vans() {
  // I refactored the code to make the fetch with a custom hook.
  // const [vans, setVans] = useState(null);
  const {data, loading, error} = useFetch(fetchVans);
  const vans = data || [];
  // useEffect(() => {
  //   const loadVans = async () => {
  //     const data = await fetchVans();
  //     setVans(data.vans);
  //   };
  //   loadVans();
  // }, []);
// the server already sorts the request by the user id.

 if (loading) {
  return (
    <div className="host-vans-container">
      <h1 aria-live="polite" >Loading ...</h1>

    </div>
  )
}

if (error) {
  return (
    <div  className="host-vans-container">
      <h1 aria-live="assertive">Error was here {error.message}</h1>

    </div>
  )
}


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

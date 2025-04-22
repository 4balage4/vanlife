
import fetchVans from "../../../utils/fetchHostVans";
import {Link} from "react-router";
import useFetch from '../../../utils/hooks/useFetch'

function Vans() {
  // I refactored the code to make the fetch with a custom hook.
  // const [vans, setVans] = useState(null);
  const {data, loading, error} = useFetch(fetchVans);
  const vans = data?.vans || [];
  // useEffect(() => {
  //   const loadVans = async () => {
  //     const data = await fetchVans();
  //     setVans(data.vans);
  //   };
  //   loadVans();
  // }, []);
// the server already sorts the request by the user id.

 if (loading) {
  return <h1 aria-live="polite" className="host-van-container">Loading ...</h1>
}

if (error) {
  return <h1 aria-live="assertive" className="host-van-container">Error was here {error.message}</h1>
}


  return (
    <div className="host-vans-container">
      <h2>Your listed vans</h2>
      {vans &&
        vans.map((van) => {
          return (
            <Link to={van.id} className="host-van-link" key={van.id}>
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

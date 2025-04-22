// import useEffectOnUpdates from '../../utils/hooks/useEffectOnUpdates'
import fetchVans from "../../utils/fetchVans";
import Button from "../../components/Button";
import VanCard from "./VanCard";
import { useSearchParams, Link } from "react-router";
import useFetch from '../../utils/hooks/useFetch'



export default function Vans() {
  const  {data, loading, error} = useFetch(fetchVans);
  // const [vans, setVans] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // I run this function to get rename the data to vans also the fetch returns .vans: { van: 1 etc}
  // vans should be always an array, and i am using optional chaining.
  // if data true, go .vans,
  const vans = data?.vans || [];
  // useEffect(() => {
  //   const loadVans = async () => {
  //     setLoading(true);
  //     try {
  //       const data = await fetchVans();
  //       if (data) {
  //         setVans(data.vans);
  //       }
  //       console.log(vans)
  //     } catch (err) {
  //       console.log('There was an error!', err)
  //       setError(err)
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadVans();
  // }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");


  const filteredVans = type
    ? vans.filter((van) => van.type.toLowerCase() == type)
    : vans;

     if (loading) {
      return <h1 aria-live="polite" className="van-container">Loading ...</h1>
    }

    if (error) {
      return <h1 aria-live="assertive" className="van-container">Error was here {error.message}</h1>
    }


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
              // this state is passed to the vandetail component, and I use this as a route back to the same search parameters.
              // the searchParams string is built with the ?{param}
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

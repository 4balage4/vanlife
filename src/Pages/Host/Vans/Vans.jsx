import {useEffect} from 'react'
import fetchVans from "../../../utils/fetchHostVans";

import {Link} from "react-router";
import useFetch from '../../../utils/hooks/useFetch'
import Loading from '../../../components/Loading'
import Button from '../../../components/Button'

import {useToast} from '../../../components/ToastNotification/ToastContext'

function Vans() {
  // I refactored the code to make the fetch with a custom hook.
  // const [vans, setVans] = useState(null);
  const {data, loading, error} = useFetch(fetchVans);
  const vans = data || [];

  const {addToast} = useToast()




 if (loading) {

    return <div className="host-van-details-container loading-animation">
    <Loading/>
  </div>
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
        <Button className='list-new-van' onClick={() => {addToast('Adding new van is not possible', 'alert')}}>List New Van</Button>

    </div>
  );
}

export default Vans;


import { useParams } from "react-router";
import fetchVan from "../../utils/fetchVan";
import Button from "../../components/Button";
import { Link, useLocation } from "react-router";
import useFetch from '../../utils/hooks/useFetch'
import {useToast} from '../../components/ToastNotification/ToastContext'


function VanDetail() {
  const param = useParams();
  const location = useLocation()
  const {addToast} = useToast()
  // const [van, setVan] = useState("");

  const {data, loading, error} = useFetch(fetchVan, param.id)
  const van = data || [];
  // useEffect(() => {
    //   const loadVan = async () => {
      //     const data = await fetchVan(param.id);
      //     return setVan(data.vans);
      //   };
      //   loadVan();
      // }, [param.id]);





  const search = location.state?.search || ""


   if (loading) {
    return <h1 aria-live="polite" className="van-detail-container">Loading ...</h1>
  }

  if (error) {
    return <h1 aria-live="assertive" className="van-detail-container">Error was here {error.message}</h1>
  }


  return (
    <div className="van-detail-container">
      <Link to={`..${search}`}
      relative="path"
      className='back-button'
      >&larr; to Vans</Link>

      {van &&
        <>
          <img src={van.imageUrl} alt={van.name} />
          <p className={`van-type ${van.type}`}>{van.type}</p>
          <h2 className="van-name">{van.name}</h2>
          <p className="van-price">
            ${van.price}
            <span>/day</span>
          </p>
          <p className="van-description">{van.description}</p>
          <Button className="van-btn" onClick={() => addToast('In progress building this function', 'neutral')}>Rent this van</Button>
        </>
      }
    </div>
  );
}

export default VanDetail;

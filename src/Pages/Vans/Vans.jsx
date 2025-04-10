import {useState, useEffect} from 'react';
// import useEffectOnUpdates from '../../utils/hooks/useEffectOnUpdates'
import fetchVans from '../../utils/fetchVans';
import Button from '../../components/Button';
import VanCard from './VanCard';


export default function Vans() {
  const [vans, setVans] = useState()

  useEffect(() => {
    const loadVans = async () => {
      const data = await fetchVans()
      setVans(data.vans)
    }
    loadVans()
  }, [])


  console.log(vans)
  // console.log(vans)

  // id
  // name
  // price
  // description
  // imageUrl
  // type

  // useEffect(() => {
  //   if (firstRender.current) {
  //     setVans(vansFetch())
  //     firstRender.current = false
  //   }
  // }, [vans])


  return (
    <div className='vans-container'>
      <div className="vans-header-container">
     <h2 className="vans-header">Explore our van options</h2>
      <div className="button-container">
        <Button className="filter">Simple</Button>
        <Button className="filter">Luxury</Button>
        <Button className="filter">Rugged</Button>
        <Button className="filter clear-filter">Clear filters</Button>
      </div>
      </div>
      <div className='vans-list-container'>
        {vans && vans.map((van) => {
          console.log(van)
          return (
            <VanCard
              id={van.id}
              name={van.name}
              price={van.price}
              imageUrl={van.imageUrl}
              type={van.type}
              />
          )
        }
        )}

      </div>
    </div>
  )
}

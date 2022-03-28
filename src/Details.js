import { useNavigate, useParams } from 'react-router-dom'

const Details = (props) => {

  const { countries } = props
  
  const params = useParams()
  let navigate = useNavigate()
  const country = countries.find(country => country.alpha3Code === params.code)

  return (
    <>
      {
      country &&
    <main className='details'>
      <button className='details__btn' onClick={() => navigate("/")}>Back</button>
      
      <div className='details__container'>
            
        <div className='details__flag' style={{ backgroundImage: `url(${country.flag})` }}></div>
        <div className='details__content'>
          <h2 className='details__name'>{country.name} </h2>
          <div className="details__info">
            <div className='details__gen'>
              <div> Native Name:  <span>{country.nativeName}</span></div>
              <div> Population:  <span>{(country.population).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span></div>
              <div> Region:  <span>{country.region}</span></div>
              <div> Capital:  <span>{country.capital}</span></div>
            </div>
            <div className='details__det'>
              <div> Top Level Domain:  <span>{country.topLevelDomain}</span></div>
              <div>Currencies: <span>{country.currencies.map(item => item.name)}</span></div>
              <div> Languages:  <span>{country.languages.map(item => item.name).join(", ")}</span></div>
            </div>
          </div>
          <div className='details__border'>Border Countries: <span>{country.borders && country.borders.join(", ")} </span>  </div>
        </div>
            
      </div>
      
    </main>
    }
    </>
    
    
  )
}

export default Details
import React, { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { reducer } from './reducer';

const Country = (props) => {

    const { countries, loading } = props
    const [state, dispatch] = useReducer(reducer, "")
    const [input, setInput] = useState("")
    const regions = countries.filter(country => country.region.toLocaleLowerCase().includes(state.toLocaleLowerCase()))


    return (
        <main className='hero' >  
            <section className='hero__filter' >
                <input
                    aria-label='Search Country'
                    className='hero__input' 
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                    placeholder='Search for a Country...' />
                
                <select
                    className='hero__select' 
                    onChange={(e) => {
                    dispatch({ type: e.target.value })
                    setInput("")
                }}>
                    <option value="all">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>    
                </select>
            </section>
            {!loading && <p className='loading'>loading..</p>}
                
            <section className='hero__countries' >
                {
                    regions.filter(country => country.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())).map(item =>
                        <Link to={`/country/${item.alpha3Code}`}
                            key={item.name}>
                            <ul className='hero__country' >
                                <li className='hero__flag' style={{ backgroundImage: `url(${item.flag})` }}></li>
                                <li className='hero__name'>{item.name} </li>
                                <li className='hero__population'> Population: <span> {item.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</span> </li>
                                <li className='hero__region'> Region: <span> {item.region}</span> </li>
                                <li className='hero__capital'> Capital: <span> {item.capital}</span> </li>
                            </ul>
                        </Link>
                    )
                }
            </section>
        </main>
    )
}

export default Country

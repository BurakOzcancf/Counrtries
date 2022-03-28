import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Country from './Country'
import Header from './Header'
import Details from './Details'

const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false)
    const [theme, setTheme] = React.useState("light")
    const switchTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    const fetchCountries = async () => {
        const response = await fetch("https://restcountries.com/v2/all")
        const res = await response.json()
        setCountries(res)
        setLoading(true)
    }
    useEffect(() => {
        fetchCountries()
    }, [])
    
    

    return (
        <Router>
            <div className='App' data-theme={theme}>
            <Header theme={theme} switchTheme={switchTheme} />
                <Routes>
                    <Route
                        path='/'
                        element={<Country countries={countries} loading={loading} theme={theme} />} />
                    <Route
                        path='/country/:code'
                        element={<Details theme={theme} countries={countries} />}
                        />
                </Routes>
            </div>
        </Router>
        
    )
}

export default App

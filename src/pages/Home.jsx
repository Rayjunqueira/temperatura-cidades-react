import { useState } from 'react';
import './home.css';

import api from '../services/api';

const Home = () => {
    const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');

    async function handleSearch () {
        try {
            const response = await api.get(`current.json?key=cb0e676d684640fb90c193636221105&q=${city}&lang=pt`)
            setWeather(response.data)
            console.log(response.data)
        } catch {
            alert('Ocorreu um erro, por favor digite uma cidade real!')
            setCity("")
        }
    }

  return (
    <div id='home'>
        <div className="container">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">weather in hands</h1>
                    <p class="lead">Digite o nome da cidade em que e obtenha informações do clima local.</p>
                </div>
            </div>
            <div class="input-group mb-3">
                <input  value={city} type="text" class="form-control" placeholder="Nome da cidade..." aria-label="Recipient's username" aria-describedby="basic-addon2"  onChange={(e) => setCity(e.target.value)} />
            </div> 
            <button onClick={handleSearch} type="button">Buscar</button>     
        </div>

        {Object.keys(weather).length > 0 && (

        <div className='infoCity'>
            <h2>Cidade: {weather.location.name} | {weather.location.country} </h2>
            <h2>Temperatura Celsius: {weather.current.temp_c} °C</h2>
            <h2>Temperatura Fahrenheit: {weather.current.temp_f} °F</h2>
        </div>
    )}
    </div>
  )
}

export default Home
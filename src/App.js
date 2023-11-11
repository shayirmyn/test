import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    const getAllPokemonst = async () => {
        const getAll = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const getAllData = getAll.data;
        setPokemons(getAllData.results);
    };

    useEffect(() => {
        getAllPokemonst();
    }, []);

    console.log(pokemons);

    return (
      <>
          <div className="mainContainer d-flex flex-wrap w-75">
              {
                  pokemons.map((every) => (
                      <div className="card w-25" key={every.name}>
                          <img src={every.url} alt={every.name}/>
                          <div className="card-body">
                              <h5 className="card-title">{every.name}</h5>
                          </div>
                      </div>
                  ))
              }
          </div>
      </>
  )
};

export default App;

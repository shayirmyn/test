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

    return (
        <>
            <div className="mainContainer d-flex flex-wrap w-75">
                {
                    pokemons.map((every, index) => (
                        <div className="card w-25"
                             key={every.name}
                        >
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                                 alt={every.name} className="w-50"/>
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

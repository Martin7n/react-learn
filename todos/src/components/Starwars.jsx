import { useEffect, useState } from "react";



const Starwars = (props) => {

    const [heroes, setHeroes] = useState([]);
    const [planets, setPlanets] = useState([]);

    const pplUrl = 'https://swapi.info/api/people'
    const planetsURL = 'https://swapi.info/api/planets'
 
    // fetch("https://swapi.info/api/people")
    // .then((res) => res.json())
    // .then((json) => console.log(json))
    // .catch((error) => console.error(error))

    useEffect( () => {
        fetch(pplUrl)
        .then((resp) => resp.json())
        .then(data => 
            setHeroes(data)
           )
        .catch(err => console.log(err));
    }, [])


    useEffect( () => {
        fetch(planetsURL)
        .then((rsp) => rsp.json())
        .then(info =>
            { 
            setPlanets(info)
            console.log(info)}
           )
        .catch(err => console.log(err));
    }, [])


    const getPlanetName = (planetUrl) => {
    const planet = planets.find((p) => p.url === planetUrl);
    return planet ? planet.name : "Unknown Planet";
    };


    

    return (<div>
        <h2>SW api results</h2>

    


        <ul>
            {heroes.map((hero) => (
                <li key={hero.url}>
                    {hero.name} with height of {hero.height} — from planet: 
                    {getPlanetName(hero.homeworld)}
                </li>
            ))}
        </ul>
        <ul> 
            {planets.map(planet => <li key={planet.url}>{planet.name}</li>)}
        </ul>

        <ul>
            {heroes.map( hero => <li key={hero.url}>{hero.name} with height of : {hero.height} </li>)}
            
        </ul>



    </div>)


};

export default Starwars;
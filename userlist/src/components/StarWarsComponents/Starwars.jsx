import { useEffect, useState } from "react";
import styles from './Starwars.module.css';
import { Link } from 'react-router-dom';




const Starwars = (props) => {

    const [heroes, setHeroes] = useState([]);
    const [planets, setPlanets] = useState([]);

    const [isVisible, setIsVisible] = useState(false);

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

    const onClickshowHandler = (e) => {

       setIsVisible(!isVisible);

    }


    

    return (<div>
        <button onClick={onClickshowHandler}>{isVisible ? "Hide" : "Show SW"}</button>
        <div className={isVisible ? styles.swarsshow : styles.swars}>
        
        <h2>SW api results</h2>

        <div className={styles.mainInf}>
            {heroes.map((hero) => (
                <div className={styles.someInf} key={hero.url}>
                    
                    {hero.name} with height of {hero.height} — from planet: 
                    <div>
                    <Link to={hero.url}>{hero.url}</Link>
                     </div>
                    {getPlanetName(hero.homeworld)
                    
                  
                    }
                    
                </div>
            ))}
        </div>
        <ul> 
            {planets.map(planet => <li key={planet.url}>{planet.name}</li>)}
        </ul>

        <ul>
            {heroes.map( hero => <li key={hero.url}>{hero.name} with height of : {hero.height} </li>)}
            
        </ul>


    </div>
    </div>
)


};

export default Starwars;
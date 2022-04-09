import React, {useEffect, useState} from "react";
import {getHeroInfo} from "./API";
import '../App.scss';
import {SingleHero} from './SingleHero';

const heroesId=[644,70,620,149,30,346,720,717,38];


export const Heroes =()=> {
    useEffect(() => {
        fetchHeroes();
    }, []);
    const [heroesList,setHeroesList]=useState([]);

    const fetchHeroes=async ()=>{
        let heroes=[];
        for (const heroId of heroesId){
            const data=await getHeroInfo(heroId);
            heroes.push(data);
        }
        //console.log(heroes)
        return setHeroesList(heroes);

    }

    return(
    <section className='heroes'>
        <h1>Most popular heroes</h1>
        <div className='heroes__list'>
        {heroesList.map(({name, powerstats, image}, i) => {
            return (

               <SingleHero key={i} name={name} powerstats={powerstats} image={image.url}/>

            )
        })

        }
        </div>
    </section>
    )
}
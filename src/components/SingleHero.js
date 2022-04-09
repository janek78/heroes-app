import React from 'react';
import '../App.scss';


export const SingleHero=({name,powerstats, image})=>{
    return(
        <div className='single__hero'>
            <h2> {name}</h2>
            <img className='single__hero__img' alt={name} src={image}/>
            <div className='single__hero__stats'>
                <div>
                    <p>{powerstats.combat}</p>
                </div>
                <div>
                    <p>{powerstats.durability}</p>
                </div>
                <div>
                    <p>{powerstats.intelligence}</p>
                </div>
                <div>
                    <p>{powerstats.speed}</p>
                </div>
                <div>
                    <p>{powerstats.strength}</p>
                </div>
            </div>
        </div>

    )

}
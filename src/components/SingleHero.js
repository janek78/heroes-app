import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import  combat from '../images/combat.png';
import  durability from '../images/durability.png';
import  strength from '../images/strength.png';
import  speed from '../images/speed.png';
import  intelligence from '../images/intelligence.png';

export const SingleHero=({name,powerstats,image,id})=>{
    return(
        <div className='single__hero'>
            <h2> {name}</h2>
            <Link to={`/hero/${id}`}><img className='single__hero__img' alt={name} src={image}/></Link>
            <div className='single__hero__stats'>
                <div>
                    <img className='single__hero__icon' src={combat} alt='combat icon' />
                    <p>{powerstats.combat}</p>
                </div>
                <div>
                    <img className='single__hero__icon' src={durability} alt='durbility icon' />
                    <p>{powerstats.durability}</p>
                </div>
                <div>
                    <img className='single__hero__icon' src={intelligence} alt='intelligence icon' />
                    <p>{powerstats.intelligence}</p>
                </div>
                <div>
                    <img className='single__hero__icon' src={speed} alt='speed icon' />
                    <p>{powerstats.speed}</p>
                </div>
                <div>
                    <img className='single__hero__icon' src={strength} alt="strength icon" />
                    <p>{powerstats.strength}</p>
                </div>
            </div>
        </div>
    )
}
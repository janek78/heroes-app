import React, {useEffect, useState} from 'react';
import '../App.scss';
import {useParams} from "react-router-dom";
import {SingleHero} from './SingleHero';
import {getHeroByName} from './API';

export const Search=()=> {
    const {name} = useParams();
    const [searchList, setSearchList] = useState([])

    useEffect(() => {
getHeroByName(name,setSearchList)
    }, [name])


    if (searchList.length=== 0) {
        return null;
    } else {

        return (
            <section className='search'>
                {/*{console.log(searchList.results)}*/}
                {searchList.results.map(({name, powerstats, image},i)=><SingleHero  name={name} powerstats={powerstats} image={image.url} key={i}/>)}
            </section>
        );
    }
}
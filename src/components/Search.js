import React, { useEffect, useState } from 'react';
import '../App.scss';
import { useParams } from 'react-router-dom';
import { SingleHero } from './SingleHero';
import { getHeroByName } from './API';

export const Search=()=> {
const {name} = useParams();
const [searchList, setSearchList] = useState(null)

    useEffect(() => {
        getHeroByName(name,setSearchList)
    }, [name])

    if (!searchList) {
        return null;
    } else {

        return (
            <section className='search'>
                {searchList.error ? searchList.error : searchList.results.map(({name, powerstats, image,id}) =>
                    <SingleHero key={id} name={name} powerstats={powerstats} image={image.url} id={id} />)
                }
            </section>
        );

    }
}
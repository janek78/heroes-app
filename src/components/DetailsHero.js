import React, {useEffect, useState} from 'react';
import '../App.scss';
import {useParams} from 'react-router-dom';
import {getHeroInfo} from './API';
import {SingleHero} from './SingleHero';

export const DetailsHero=()=>{
const {id} = useParams();
const [searchDetails, setSearchDetails] = useState(null)

    useEffect(() => {
        fetchHeroes(id)
    },[id])

    const fetchHeroes = async (id)=>{
        const data= await getHeroInfo(id);
        return setSearchDetails(data);
    }

    if (!searchDetails) {
        return null;
    } else {
      const {name,powerstats,image,id,appearance,work,biography}=searchDetails;

        return (
            <section className='description__hero'>
                <SingleHero name={name} powerstats={powerstats} image={image.url} id={id}/>
                <div className='description'>
                    <div>
                        <p>
                            <span>Full name:</span> {biography['full-name']}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className='sp'>Place of birth:</span> {biography['place-of-birth']}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Alter egos:</span> {biography['alter-egos']}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Race:</span> {appearance.race}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Eye color:</span> {appearance['eye-color']}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Hair color:</span> {appearance['hair-color']}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Gender:</span> {appearance.gender}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Height:</span> {appearance.height.join(" , ")}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Weight:</span> {appearance.weight.join(" , ")}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Occupation:</span> {work.occupation}
                        </p>
                    </div>
                    <div>
                        <p>
                            <span>Base:</span> {work.base}
                        </p>
                    </div>
                </div>
            </section>
        );
    }

}
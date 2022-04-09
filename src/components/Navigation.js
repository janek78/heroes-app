import React, {useState} from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'


export const Navigation=()=>{

    const [ searchValue, setSearchValue ] = useState("");

    return (
        <nav className='navigation'>
            <div className='container'>
                <Link to="/"><img className='navigation__logo' src={logo} alt='Superhero search engine' /></Link>
                <div className='navigation__search'>
                    <input onChange={event => setSearchValue(event.target.value)} value={searchValue} type='text' name='search' />
                    <Link to={`/search/${searchValue}`}><button>Search Hero</button></Link>
                </div>
            </div>
        </nav>
    );
}


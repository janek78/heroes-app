const TOKEN= 5161933390530371;

export const getHeroInfo=(id)=>{
    return (fetch(`https://www.superheroapi.com/api.php/${TOKEN}/${id}`)
        .then(response=>{
            if (response.ok){
                return response;
            }
            throw Error('Error');
        })
        .then(response => response.json())
        .catch(err => console.error('Error:' + err))
    )
 }

export const getHeroByName=(name,setSearchList)=>{
    return (fetch(`https://www.superheroapi.com/api.php/${TOKEN}/search/${name}`)
        .then(response => {
            if (response.ok) {
                return response;
            }
                throw new Error('Error');
        })
        .then(response => response.json())
        .then(json => setSearchList(json))
        .catch(err => console.error('Error:' + err))
    )
}



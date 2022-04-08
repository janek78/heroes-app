const TOKEN= 5161933390530371;
export const getHeroInfo=(id)=>{
return (fetch(`https://www.superheroapi.com/api.php/${TOKEN}/${id}`)
    .then(response=>{
        if (response.ok){
            return response
        }
        throw Error("blad")
    })

   .then(response => response.json())
   .catch(err => console.error('error:' + err))
)
 }



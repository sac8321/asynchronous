const fetchData = require ('../utils/fetchData.js')
let API='https://rickandmortyapi.com/api/character/';

const anotherFunciotn = async (url_api) => {
    try{
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }catch(error){
        console.error(error);
    }
}

console.log('Before1');
anotherFunciotn(API);
console.log('After1');
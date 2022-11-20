const fetchPokemon =async () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    let data=await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("asserts/img/sad-pikachu.gif")
        }
        else {
            return res.json();
        }
    })
    if (data) {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeInfo= data.abilities;
        let pokeNames=data.name;
        let pokeID=data.id;
        let pokeWeight=data.weight;
        let pokeHeight=data.height;
        pokeImage(pokeImg);
        pokeData(pokeInfo);
        pokemonName(pokeNames);
        pokemonIdNames(pokeID);
        pokemonHeight(pokeHeight);
        pokemonWeight(pokeWeight);
        console.log(pokeImg);
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


const pokeData=(abilities)=>{
    const pokeAbilities=document.getElementById("abilities");
    const abilitiesName = abilities.map(item=> item.ability.name);
    //console.log('abilities full', abilities);
    //console.log('abilities Names', abilitiesName);
    pokeAbilities.innerHTML=  abilitiesName;

}

const pokemonName=(names)=>{
    const pokeNames=document.getElementById("names");
    pokeNames.innerHTML= '<h2>'+names. toUpperCase()+ '</h2>';
}

const pokemonIdNames=(idNames)=>{
    const pokeNames=document.getElementById("idNames");
    pokeNames.innerHTML= '<h2> #'+idNames+'</h2>';
}


const pokemonWeight=(peso)=>{
    const pokeNames=document.getElementById("peso");
    pokeNames.innerHTML= '<h2>Peso: '+peso+' Kg</h2>';
}
const pokemonHeight=(altura)=>{
    const pokeNames=document.getElementById("altura");
    pokeNames.innerHTML= '<h2>Altura: '+altura+' m</h2>';
}
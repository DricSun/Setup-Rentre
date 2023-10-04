for (let x = 1; x <= 150; x++) {  // boucle for qui va parcourir les 150 prmiers pokemon 
	fetch("https://pokeapi.co/api/v2/pokemon/" + x) // url pour allez chezcher les données de l'API 
		.then(response => response.json()) // then = promesse -> qui va contenir notre premiere reponse qui est converti au format json
		.then(data => { // 2eme promesse qui va contenir les data de chaque pokemon
			console.log(data) 
			const pokemon = { //objet pokemon qui contient (dicitonnaire)
				name: data.name, // index : valeur
				id: data.id,
				image: data.sprites.front_default,
				types : data.types,
				stats : data.stats
			}
			RenderPokemon(pokemon)
		})
  
}
  
function RenderPokemon(pokemon){
	const container = document.getElementById("containeur-poke") 
	const blocPokemon = document.createElement("div")
	const namePoke = document.createElement("h4")
	const idPoke = document.createElement("h3")
	const imagePoke = document.createElement("img")
	const typePoke = document.createElement("p")
	const contentPoke = document.createElement("div")
	const statsName = document.createElement("p")
	// const statsValue = document.createElement("p")
  
	namePoke.innerHTML = pokemon["name"] 
	idPoke.innerHTML = pokemon["id"] 
	imagePoke.src = pokemon["image"]
	typePoke.innerHTML = CreatePokemonType(pokemon["types"])
	statsName.innerHTML = CreateStatsPoke(pokemon["stats"])
	// statsValue.innerHTML = CreateStatsPoke(pokemon["stats"])
  
	blocPokemon.append(namePoke, idPoke, contentPoke, statsName,  typePoke) 
  
	container.appendChild(blocPokemon) 

	contentPoke.append(imagePoke)
}
  
  
function CreatePokemonType(types){
	let result = "" 
  
	types.forEach(element => { 
		result += element["type"]["name"] + " "
	})
	return result
}
  
function CreateStatsPoke(stats){
	let resultStats = ""

	stats.forEach(e =>{
		resultStats += e["stat"]["name"] + "  " 
	})
	return resultStats
}
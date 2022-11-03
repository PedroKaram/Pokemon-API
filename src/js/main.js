const pokemon = document.querySelector("#pokemon")
const result = document.querySelector("#result")
const link = document.createElement("a")

pokemon.addEventListener("blur", () => {
    let search = pokemon.value

    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    .then(res => {
        result.appendChild(link)
        link.href = `https://pokemon.fandom.com/pt-br/wiki/${search}`
        link.innerHTML = `Click here to know more about ${search}`

        if(res.status == 404) {
            alert(`The Pokemon ${search} doesn't exist`)
            result.innerHTML = "Try finding another pokemon"
        }
    })
})
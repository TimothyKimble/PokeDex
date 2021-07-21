
import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
  async getAllPokemon() {
    let res = await pokeApi.get("pokemon?limit=151")
    console.log(res.data.results)
    ProxyState.allApiPokemon = res.data.results
  }

  async getPokemon(name) {
    let res = await pokeApi.get('pokemon/' + name)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }
}

export const pokemonsService = new PokemonService()



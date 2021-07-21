import { ProxyState } from "../AppState.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawAll() {
  const pokemon = ProxyState.allApiPokemon
  let template = ''
  pokemon.forEach(p => template += `<li class="action" onclick="app.pokemonsController.getPokemon('${p.name}')">${p.name}</li>`)
  document.getElementById('api-pokemon').innerHTML = template

}

function _drawActivePokemon() {
  if (!ProxyState.activePokemon) {
    document.getElementById('active-pokemon').innerHTML = `<div class="text-center"><em>No Active Pokemon</em></div>`
    return
  }
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
}

export default class PokemonsController {
  constructor() {

    ProxyState.on('allApiPokemon', _drawAll)
    ProxyState.on('activePokemon', _drawActivePokemon)

    this.getAllPokemon();
  }

  async getAllPokemon() {
    try {
      await pokemonsService.getAllPokemon();
    } catch (error) {
      console.error('There was an issue getting Pokemon')
    }
  }

  async getPokemon(name) {
    try {
      await pokemonsService.getPokemon(name)

    } catch (error) {
      console.error(error)
    }
  }
}
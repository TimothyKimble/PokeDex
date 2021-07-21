import { ProxyState } from "../AppState.js";


export default class Pokemon {
  constructor({ name, img, weight, height, types, order, forms, id }) {
    this.id = id;
    this.name = name;
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.id}.svg`;
    this.weight = weight;
    this.height = height;
    this.type = types;
    this.index = order;
    this.forms = forms;
  }


  get Template() {
    return `
    <div class="col-md-12 col-sm-12 ">
    <div class="bg-light shadow">
        <img src="${this.img}" class="w-100" alt="${this.name} ${this.type.name} pokemon image">
        <div class="p-3 text-center">
            <div class="text-center">
                <h3><b>${this.name}</b></h3>
            </div>
            <p>${this.type.type.name}</p>
            <p>${this.weight}</p>
            
            <p><em>PokeDex Number: ${this.index}</em></p>
        </div>
    </div>
  </div>`
  }
}
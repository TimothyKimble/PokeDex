
// @ts-ignore
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 4000
})
//grabbing spells because we are only working with the spells api.


// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/TimothyKimble/pokemon',
  timeout: 10000
})
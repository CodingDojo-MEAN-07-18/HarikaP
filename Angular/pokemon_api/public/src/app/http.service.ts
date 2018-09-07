import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
    this.getPokemon();
  }
  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    let a = '';
    bulbasaur.subscribe(<Object>(data) =>{
      console.log("Got our data!", data);
      console.log(data.abilities.length);
      for(var i=0; i<data.abilities.length; i++){
          a = a + data.abilities[i].ability.name;
          if(i<data.abilities.length-1){
            a += ' and ';
          }
      }
      console.log("The ability of your pokemon: " + a);

      let other = data.abilities[1].ability.url;
      const similar_pokemon = this._http.get(other);
      similar_pokemon.subscribe(<Object>(other_poke) =>{
        console.log(other_poke.pokemon.length -1 + ' other pokemons also have ' + data.abilities[1].ability.name + ' as their ability')

      })
    }

    );

  }
}

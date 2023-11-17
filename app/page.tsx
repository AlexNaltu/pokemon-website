import Image from "next/image";
import HeroPokemon from "./components/hero-pokemon";
import { getPokemonList } from "@/lib/pokemonAPI";
import PokemonGrid from "./components/pokemon-grid";

export default async function Home() {
  const firstPokemon = await fetch(
    "https://pokeapi.co/api/v2/pokemon/charizard"
  ).then((res) => res.json());
  const pokemonList = await getPokemonList();

  console.log(pokemonList.sprites);

  return (
    <div>
      <HeroPokemon name={firstPokemon.name} />
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}

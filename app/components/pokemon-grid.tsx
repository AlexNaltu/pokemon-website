"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import PokemonCard from "./pokemon-card";

interface PokemonGridProps {
  pokemonList: any;
}

export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const searchFillter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase())
    );
  };

  const filteredPokemonList = searchFillter(pokemonList);

  return (
    <main className="max-w-sm mx-auto my-10">
      <div>
        <div className="flex text-[#EB4904] gap-2 my-2">
          <SearchIcon />
          <h1>Search Pokemons Here</h1>
        </div>
        <div className="flex flex-row-reverse h-10 items-center rounded-md border border-input bg-white text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2">
          <SearchIcon className="absolute m-2" />
          <Input
            type="text"
            className="w-full p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Ex. Charizard, Pikachu, etc."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="pokemonName"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3"></div>
        </div>
      </div>
    </main>
  );
}

/* {filteredPokemonList.map((pokemon: any) => {
              return <PokemonCard name={pokemon.name} image={pokemon.sprites.other["official-artwork"].front_default}/>;
            })} */

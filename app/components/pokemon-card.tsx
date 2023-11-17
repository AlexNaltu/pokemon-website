import Image from "next/image";
import Link from "next/link";
import PokemonImage from "./pokemon-image";
import { getPokemonData } from "@/lib/pokemonAPI";

interface PokemonCardProps {
  name: string;
  image: any;
}

export default function PokemonCard({ name, image }: PokemonCardProps) {
  return (
    <Link href={name} className="" key={name + "Card"}>
      <PokemonImage image={image} />
      <h2 className=" text-2xl font-semibold capitalize text-white">{name}</h2>
    </Link>
  );
}

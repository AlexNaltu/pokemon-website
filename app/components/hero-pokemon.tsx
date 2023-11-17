import { Button } from "@/components/ui/button";
import Image from "next/image";

interface HeroPokemonProps {
  name: string;
}

export default function HeroPokemon({ name }: HeroPokemonProps) {
  return (
    <div className=" bg-[#EB4904] pb-12 rounded-b-[40%]">
      <div className="flex flex-col sm:flex-row items-center justify-center p-5 gap-6">
        <div className="max-w-sm flex flex-col gap-2 md:gap-4">
          <h1 className="capitalize font-bold text-2xl">{name}</h1>
          <p className="text-xs md:text-sm tracking-tighter">
            Pokémon is a popular franchise where trainers catch and train
            diverse creatures for battles. With over 800 species, each with
            unique types and abilities, trainers use Poké Balls to capture and
            store Pokémon. The goal is to become a Pokémon Master by collecting
            Gym Badges, defeating the Elite Four, and challenging the Pokémon
            League in various regions. Evolution, battles, and exploration are
            key elements, showcased in video games, an animated TV series,
            movies, and a trading card game. The iconic phrase, "Gotta Catch 'Em
            All," reflects the core concept of capturing and collecting these
            creatures.
          </p>
          <Button className="w-full bg-black">Read More</Button>
        </div>
        <Image
          src="/smallcharizard.png"
          width={300}
          height={200}
          alt="/"
          className="hidden sm:block"
        />
      </div>
    </div>
  );
}

/*  <h1 className="capitalize text-2xl font-bold max-w-sm">{name}</h1>
          <p>
            Pokémon is a popular franchise where trainers catch and train
            diverse creatures for battles. With over 800 species, each with
            unique types and abilities, trainers use Poké Balls to capture and
            store Pokémon. The goal is to become a Pokémon Master by collecting
            Gym Badges, defeating the Elite Four, and challenging the Pokémon
            League in various regions. Evolution, battles, and exploration are
            key elements, showcased in video games, an animated TV series,
            movies, and a trading card game. The iconic phrase, "Gotta Catch 'Em
            All," reflects the core concept of capturing and collecting these
            creatures.
          </p>
           */
// <Image src="/charizard.png" width={300} height={200} alt="/" />

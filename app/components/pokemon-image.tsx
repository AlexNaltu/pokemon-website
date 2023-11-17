import Image from "next/image";

export default function PokemonImage({ image }: { image: any }) {
  return <Image src={image} alt="/" width={200} height={200} />;
}

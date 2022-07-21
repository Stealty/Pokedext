import styles from "./PokeCard.module.scss";
import { PokeId, PokemonImage, PokemonName } from "@atoms";
import { useEffect, useState } from "react";
import useFetch from "@hooks/useFetch";

type PokeCardProps = {
  name: string;
  type: string;
  url: string;
  color: string;
}

export default function PokeCard({ name, type, url, color }: PokeCardProps) {
  const [pokemon, setPokemon] = useState({});
  const [pokemonImage, setPokemonImage] = useState("");
  const [data, loading, error] = useFetch(url);

  useEffect(() => {
    if (data) {
      setPokemon(data);
      setPokemonImage(data.sprites.front_default);
      console.log(data)
    } else {
      return;
    }
  }, [loading]);

  return (
    <div
      className={
        styles.PokeCard__container +
        " " +
        styles[`PokeCard__container--${data?.types[0].type.name}`]
      }
    >
      <div className={styles.PokeCard__idWrapper}>
        <PokeId pokemonId={pokemon.id} classColor={color} />
      </div>
      <PokemonImage
        url={url}
        name={pokemon.name}
        image={pokemonImage}
        loading={loading}
      />
      <PokemonName name={name} type={data?.types[0].type.name} />
    </div>
  );
}

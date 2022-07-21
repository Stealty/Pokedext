import { useEffect, useState } from "react";
import styles from "./PokemonImage.module.scss";

type PokemonImageProps = {
  name: string;
  image: string;
  loading: boolean;
}

export default function PokemonImage({ name, image, loading }: PokemonImageProps) {
  const [pokemon, setPokemon] = useState("./images/loading.gif");

  useEffect(() => {
    if (image) {
      return setPokemon(image);
    }
  }, [image]);

  return loading ? (
    <img
      src={"./images/loading.gif"}
      alt={`A picture of ${name}`}
      className={styles.PokeCard__image}
    />
  ) : (
    <img
      src={`${pokemon}`}
      alt={`A picture of ${name}`}
      className={styles.PokeCard__image}
    />
  );
}

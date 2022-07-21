import styles from "./PokemonName.module.scss";

type PokemonNameProps = {
  name: string;
  type: string;
}

export default function PokemonName({ name, type }: PokemonNameProps) {
  return (
    <p
      className={
        styles.PokeCard__name + " " + styles[`PokeCard__name--${type}`]
      }
    >
      {name}
    </p>
  );
}

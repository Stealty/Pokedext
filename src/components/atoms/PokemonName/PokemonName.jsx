import styles from "./PokemonName.module.scss";

export default function PokemonName({ name, type }) {
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

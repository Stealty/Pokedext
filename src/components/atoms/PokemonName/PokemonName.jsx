import styles from "./PokemonName.module.scss";

export default function PokemonName({ name }) {
  return <p className={styles.PokeCard__name}>{name}</p>;
}

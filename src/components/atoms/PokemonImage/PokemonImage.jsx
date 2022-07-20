import styles from "./PokemonImage.module.scss";

export default function PokemonImage({ name, image, loading }) {
  return !loading ? (
    <img
      src={`${image}`}
      alt={`A picture of ${name}`}
      className={styles.PokeCard__image}
    />
  ) : (
    <p>loading...</p>
  );
}

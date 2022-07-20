import styles from "./PokeId.module.scss";

export default function PokeId({ pokemonId, classColor }) {
  return (
    <span
      className={
        classColor
          ? styles.PokeId + " " + styles[`PokeId--${classColor}`]
          : styles.PokeId
      }
    >
      #{pokemonId}
    </span>
  );
}

import styles from "./PokeId.module.scss";

type PokeIdProps = {
  pokemonId:  number;
  classColor?: string;
}

export default function PokeId({ pokemonId, classColor }: PokeIdProps) {
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

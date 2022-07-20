import { Filter } from "@atoms";
import { Heading } from "@molecules";
import { PokeCard } from "@organisms";
import styles from "./Home.module.scss";
import useFetch from "@hooks/useFetch";
import { useState, useEffect } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [data, loading, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=500`
  );

  useEffect(() => {
    if (data) {
      setPokemons(data.results);
      setFilteredPokemons(data.results);
    } else {
      return;
    }
  }, [loading]);

  function handleFilterPokemons(event) {
    const filterPokemons = pokemons.filter((pokemon) => {
      return pokemon.name.includes(event.target.value.trim().toLowerCase());
    });
    setFilteredPokemons(filterPokemons);
  }

  return (
    <div className={styles.Home}>
      <div className={styles.Heading__wrapper}>
        <Heading title="Pokedex" />
      </div>
      <Filter filter={handleFilterPokemons} />
      <ul className={styles.PokeCard__wrapper}>
        {!loading
          ? filteredPokemons.map((pokemon) => {
              return (
                <li key={pokemon.name} className={styles.PokeCard__listItem}>
                  <PokeCard name={pokemon.name} url={pokemon.url} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

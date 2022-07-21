import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import { Filter } from "@atoms";
import { Heading } from "@molecules";
import { PokeCard } from "@organisms";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonSlice } from "../../store/modules/pokemon.store";
import { useGetPokemonByNameQuery } from "../../api";

export default function Home() {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  const { data, isLoading, error } = useGetPokemonByNameQuery(151);

  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonSlice(data.results));
      setFilteredPokemons(data.results);
    } else return;
  }, [isLoading]);

  function handleFilterPokemons(event) {
    const filterPokemons = pokemons.pokemons.filter((pokemon) => {
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
        {!isLoading && filteredPokemons != [] ? (
          filteredPokemons.map((pokemon) => {
            return (
              <li key={pokemon.name} className={styles.PokeCard__listItem}>
                <PokeCard name={pokemon.name} url={pokemon.url} />
              </li>
            );
          })
        ) : (
          <div>
            <img src="./images/loading.gif" alt="" />
          </div>
        )}
      </ul>
    </div>
  );
}

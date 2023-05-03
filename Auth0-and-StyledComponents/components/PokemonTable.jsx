import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";



export default function PokemonTable() {

    const { pokemon,filter } = useContext(PokemonContext);
    

    return (
      <table width="100%">
        <tbody>
                {pokemon?.filter(({ name: { english } })=>(
                english.toLowerCase().includes(filter.toLowerCase())
          )).slice(0, 20).map((pokemon) => (
            <PokemonRow key={pokemon.id} pokemon={pokemon} />
          ))}
        </tbody>
      </table>
    );
}
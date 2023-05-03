import PokemonContext from "../PokemonContext";
import { useContext } from "react";

export default function PokemonInfo() {
  const { selectedPokemon } = useContext(PokemonContext);
    return selectedPokemon ? (
        <div>
            <h2>{selectedPokemon.name.english}</h2>
            {Object.keys(selectedPokemon.base)?.map(key =>
                <tr key={key}>
                    <td>
                        {key}
                    </td>
                    <td>
                        {selectedPokemon.base[key]}
                    </td>
                </tr>)}
      </div>
  ) :null
}

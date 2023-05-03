
import PokemonContext from "../PokemonContext";
import { useContext } from "react";
import  Button from "@mui/material/Button";

export default function PokemonRow({ pokemon }) {
    
    const { setSelectedPokemon } = useContext(PokemonContext);
    return (
        <>
            <tr >
                <td >{pokemon.name.english}</td>
                <td>{pokemon.type.join(" , ")}</td>
                <td>
                    <Button onClick={()=>setSelectedPokemon(pokemon)} variant='contained' color='primary'>
                        more info
                    </Button>
                </td>

            </tr>
        </>
    )
}
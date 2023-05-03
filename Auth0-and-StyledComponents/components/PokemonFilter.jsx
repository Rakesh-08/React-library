import styled from "@emotion/styled";
import { useContext } from "react";
import PokemonContext from "../PokemonContext";

const Input = styled.input`
  width: 100%;
  font-size: large;
  padding: 0.2rem;
  border-radius: 5px;
`;

export default function PokemonFilter() {
  const { filter, setFilter } = useContext(PokemonContext);
  

  return (<Input
    value={filter}
    onChange={e=>setFilter(e.target.value)}
    type='text' />)
}

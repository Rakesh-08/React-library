import "./App.css";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import PokemonContext from "./PokemonContext";
import PokemonFilter from "./components/PokemonFilter";
import PokemonTable from "./components/PokemonTable";
import PokemonInfo from "./components/PokemonInfo";
import { useState, useEffect,Provider } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Title = styled.h1`
  text-align: center;
  color: green;
`;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 1rem;
`;

const ButtonContainerTwo = styled.div`
display:flex;
justify-content:space-around;
margin:auto;
width:400px;
padding:4rem;`;

const ButtonContainerOne = styled.div`
margin:auto;
width:40px;
padding-top:20em;`

export default function App() {

  const [filter, setFilter] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const { isAuthenticated, loginWithRedirect ,user,logout}= useAuth0();
  
  const getPokemon = async () => {
    
    try {
      let response = await fetch('/pokemon.json');
      
       
      if (response.statusText === 'OK') {
        setPokemon( (await response.json()).pokemon)
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getPokemon()
  },[])

  return (
    <PokemonContext.Provider
      value={{
        filter,
        setFilter,
        pokemon,
        setPokemon,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {isAuthenticated ? (
        <ButtonContainerTwo>
          <Title>Hii {user?.name}</Title>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Button>
        </ButtonContainerTwo>
      ) : (
        <ButtonContainerOne>
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        </ButtonContainerOne>
      )}

      {isAuthenticated && (
        <div className="app">
          <PageContainer>
            <h4>{user?.email}</h4>
            <Title>Pokemon Search</Title>
            <TwoColumnLayout>
              <div>
                <PokemonFilter />
                <PokemonTable />
              </div>
              <PokemonInfo />
            </TwoColumnLayout>
          </PageContainer>
        </div>
      )}
    </PokemonContext.Provider>
  );
}

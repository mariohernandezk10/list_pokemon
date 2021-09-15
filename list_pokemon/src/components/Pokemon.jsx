import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  margin: 40px;
  border: 2px outset red;
`;
const Title = styled.p`
  font-size: 5px;
  font-weight: 400;
  text-align: center;
`;
const PokemonContainer = styled.section`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-flow: column;
`
const Header = styled.h2`
  font-size: 10px;
`
const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 15px;
  padding-bottom: 20px;
  padding-top: 20px;
`
const Poke = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  min-height: 150px;
  padding: 15px;
  background: #f3f3f3;
`
const Name = styled.h3`
  text-transform: uppercase;
  font-size: medium;
  text-align: center;
`
const PokeImg = styled.img`
  max-height: 100px;
`
const PokeBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: firebrick;
  color: #f3f3f3;
  font-size: 28px;
  cursor: pointer;
`
const GetBtn = styled.button`
  width: 30%;
  height: auto;
  margin: 0 auto;
`

export default function Pokemon() {

  const [pokemonState, setPokemonState] = useState({});
  const [pokemonsState, setPokemonsState] = useState([]);



  useEffect(() => {
    setPokemonsState(state => {

        const monExists = (state.filter(p => pokemonState.id === p.id).length > 0);

        if (!monExists) {

          // the state is set to the state PLUS the new pokemon which is the "pokemonState" but under some conditions
          state = [...state, pokemonState]

          // sorts in ascending order
          state.sort(function (a, b) {
            // Returns the state under some conditions, in this case it places them in ascending order
            return a.id - b.id
          })
        }
        return state;
    })
  }, [pokemonState])

  const Loop = () => {
    for (let i = 1; i <= 100; i++) {
      GetAllPokemon(i);
    }
  }


  const GetAllPokemon = (x) => {

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${x}`)
      // .then(res => setwildPokemonState(res.data))
      .then(res => setPokemonState(res.data))
  }


  return (
    <>
      <Container>
        <Title>Pokemon</Title>
        <PokemonContainer>
          <Header>Pick Your Favorite</Header>
          <GetBtn onClick={() => Loop()} >Generate </GetBtn>
          <List>
            {pokemonsState.map((pokemon) => (
            <Poke id={pokemon.id} info={pokemon} >
              <Name>{pokemon.name}</Name>
              <PokeImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="pokemon" />
              <PokeBtn onClick={() => console.log("Do Something")}>&times;</PokeBtn>
            </Poke>
            ))
            }
          </List>
        </PokemonContainer>
      </Container>
    </>
  )
};
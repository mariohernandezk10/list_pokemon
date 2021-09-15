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
  position: absolute;
  bottom: 0;
`
const PokeImg = styled.img`
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

export default function Pokemon() { 
  
  // const [pokedexState, setPokedexState] = useState([]);

  // useEffect(() => {
  //   encounterWildPokemon();
  // }, [])

  

  return (
    <>
  <Container>
    <Title>Pokemon</Title>
    <PokemonContainer>
      <Header>Pick Your Favorite</Header>
      <List>
        {/* under this I mapped through state and then rendered each pokemon individually */}
        {/* {pokedexState.map((pokemon) => (


          Name, PokeBtn, PokeImg should be in here



        )) */}
        <Poke key="" info="" >
          <Name>Pikachu</Name>
          <PokeImg src="" alt="pokemon" />
          {/* ADD this to the src: {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} */}
          <PokeBtn onClick={() => console.log("Do Something")}>&times;</PokeBtn>
        </Poke>

        {/* 

        {pokedexState.map((pokemon) => (
            <div className="pokemon" key={pokemon.id} info={pokemon} >
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="caught pokemon" className="sprite"/>
                <h3 className="pokemon-name">{pokemon.name}</h3>
                <button className="remove" onClick={() => releasePokemon(pokemon.id)} >&times;</button>
            </div>
        ))}

        */}
      </List>
    </PokemonContainer>
  </Container>
  </>
)};
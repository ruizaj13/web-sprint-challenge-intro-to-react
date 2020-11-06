// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const CharHolderDiv = styled.div`
display: flex;
padding-left: auto;
padding-right: auto;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
color: white;
text-shadow: 2px 2px black;
` 

const CharCard = styled.div`
    &:hover {
    transform: scale(1.1);
    color: gray;
    }
`

const Character = (props) => {
    const { data } = props
    return (
        <CharHolderDiv>
            {data.map((character) => {
                return (
                    <CharCard>
                        <h1>Name: {character.name}</h1>
                        <h2>Birth year: {character.birth_year}</h2>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Skin color: {character.skin_color}</h3>
                        <h3>Height: {character.height}</h3>

                    </CharCard>
                )
            })}
        </CharHolderDiv>
    )
}

export default Character;

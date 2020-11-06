// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const Character = props => {

    const { data } = props
    return(
        <div>
            {data.map((character) => {
                return(
                    <div>
                        <li>Name: {character.name}</li>
                        <li>Status: {character.status}</li>
                        <li>Species: {character.species}</li>
                        <li>Gender: {character.gender}</li>
                    </div>
                )
            })}


        </div>



    )

}
import React from 'react'
import styled from 'styled-components'


const StyledName = styled.h1`
font-size: 50px;
color: red;
`

const StyledContainer = styled.div`
border: 2px solid black;
margin: 2rem 0 2rem 0;
`




function CharacterList(props) {
    return (
        <div>
            {props.people.map(swPeople => (
                <StyledContainer>
                <StyledName>Name: {swPeople.name}</StyledName>
            <h3>Gender:{swPeople.gender}</h3>
            <h3>Weight:{swPeople.height}</h3>
            </StyledContainer>
            ))}
        </div>
    )
}


export default CharacterList;
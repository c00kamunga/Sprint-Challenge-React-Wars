import React from 'react'

function CharacterList(props) {
    return (
        <div>
            {props.people.map(swPeople => (
                <h1>Name:{swPeople.name}</h1>
            ))}
        </div>
    )
}


export default CharacterList;
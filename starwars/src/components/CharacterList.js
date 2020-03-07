import React from 'react'

function CharacterList(props) {
    return (
        <div>
            {props.people.map(swPeople => (
                <>
                <h1>Name:{swPeople.name}</h1>
            <h3>Gender{swPeople.gender}</h3>
            <h3>Weight{swPeople.height}</h3>
            </>
            ))}
        </div>
    )
}


export default CharacterList;
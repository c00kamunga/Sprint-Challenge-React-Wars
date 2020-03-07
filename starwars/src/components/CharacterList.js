import React from 'react'

export default function CharacterList(props) {
    return (
        <div>
            {props.people.map(swPeople => (
                <h1>Name:{swPeople.name}</h1>
            ))}
        </div>
    )
}

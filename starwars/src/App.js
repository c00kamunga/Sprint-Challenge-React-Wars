import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterList from './components/CharacterList';
import styled from 'styled-components';

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then((res) => {
        console.log(res.data.results);
        setPeople(res.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterList people={people}/>
    </div>
  );
};

export default App;

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

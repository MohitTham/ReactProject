import React, { useState, useEffect } from 'react';
import Form from './Form.jsx'
import Header from './Header.jsx'
import Results from './Results.jsx'
import './App.css';

function App() {
  const searchOptions = {
    //key: process.env.REACT_APP_GIPHY_KEY,
    numberOfJokes: 'ten',
    type: '',
    random: 'random',
    api: 'https://official-joke-api.appspot.com/jokes/',

  };

  const [jokes, setJokes] = useState([{
    id: 0,
    type: "",
    setup: "",
    punchline: ""
  }]);
  const [searchString, setSearchString] = useState('programming');
 

  useEffect(() => {
    getJokes(searchString);
  }, []);

  function getJokes(searchString) {
    const url = `${searchOptions.api}${searchOptions.random}`
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(response => {
        setJokes(response.data.setup);
        setSearchString('');

      })
      .catch(console.error);


  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getJokes(searchString);
  }

  return (
    <div className="App">
      <Header/>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Results jokes={jokes} />

    </div>
  );
}

export default App;

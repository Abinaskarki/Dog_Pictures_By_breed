import React, { useState, useEffect } from 'react';
import breedList from '../constants'
import Gallery from '../components/Gallary'
import '../css/App.css'

const App = () => {

  const [breed, setBreed] = useState(breedList[0]);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const handleChange = event => {
    setBreed(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`);
      const res = await response.json();
      setData(res.message);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <div className="App">
      <h1 className="heading">🐕🐶🦮🐶🐕‍🦺🐶</h1>
      <form className="form" noValidate onSubmit={handleSubmit}>
        <label className="label"> Choose a 🐶 breed type</label>
        <select className="select" name="breed" onChange={handleChange} defaultValue="assd">
          {breedList.map((value, index) => <option key={index} value={value}>{value}</option>)}
        </select>
        {error && <span className="error">{JSON.stringify(error)}</span>}
        <button className="button" type="submit">Search</button>
      </form>
      {data && <Gallery imgUrls={data} />}
    </div>
  );
}

export default App;

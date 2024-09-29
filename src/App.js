import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css'; // Import custom CSS for magical theme
import Filters from './components/Filters'; // Importing Filters component
import CharacterCards from './components/CharacterCards'; // Importing CharacterCards component

function apiGet() {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then(response => response.json())
    .catch(err => {
      console.error(err);
      return [];
    });
}

function App() {
  const [chars, setChars] = useState([]);
  const [houseFilter, setHouseFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    apiGet().then(data => {
      setChars(data);
    });
  }, []);

  const handleHouseChange = (e) => {
    setHouseFilter(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpeciesFilter(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredChars = chars.filter((char) => {
    if (houseFilter && char.house !== houseFilter) return false;
    if (speciesFilter && char.species !== speciesFilter) return false;
    if (searchTerm && !char.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className='container-fluid magical-background'>
      <h2 className='text-center mt-3 mb-4 magic-title'>Harry Potter Characters</h2>
      
      <Filters 
        houseFilter={houseFilter} 
        speciesFilter={speciesFilter} 
        searchTerm={searchTerm} 
        onHouseChange={handleHouseChange} 
        onSpeciesChange={handleSpeciesChange} 
        onSearch={handleSearch} 
      />

      <CharacterCards filteredChars={filteredChars} />
    </div>
  );
}

export default App;

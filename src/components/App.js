import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleChangeType = (selectedType) => {
    setFilters({ type: selectedType });
  };

  const handleFindPetsClick = () => {
    const apiUrl =
      filters.type === "all"
        ? "http://localhost:3001/pets"
        : `http://localhost:3001/pets?type=${filters.type}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPets(data));
  };

  const handleAdoptPet = (petId) => {
    const updatedPets = pets.map((pet) =>
      pet.id === petId ? { ...pet, isAdopted: true } : pet
    );
    setPets(updatedPets);
  };

  useEffect(() => {
    handleFindPetsClick();
  }, [filters.type]); 

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

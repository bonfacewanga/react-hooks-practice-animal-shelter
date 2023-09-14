import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petComponents = pets.map((pet) => (
    <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  ));

  return <div className="ui cards">{petComponents}</div>;
}

export default PetBrowser;

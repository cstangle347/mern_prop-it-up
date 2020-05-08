import React, { Component } from 'react';
//import PersonCard from './Components/PersonCard';
import AnotherPersonCard from './Components/AnotherPersonCard';

function App() {
  return (
    <div className="App">
      <AnotherPersonCard
        firstName = "Jane"
        lastName = "Doe"
        age = {45}
        hairColor = "Black"
      />
      <AnotherPersonCard
        firstName = "John"
        lastName = "Smith"
        age = {88}
        hairColor = "Brown"
      />
      <AnotherPersonCard
        firstName = "Millard"
        lastName = "Fillmore"
        age = {50}
        hairColor = "Brown"
      />
      <AnotherPersonCard
        firstName = "Maria"
        lastName = "Smith"
        age = {62}
        hairColor = "Brown"
      />
    </div>
  );
}

export default App;

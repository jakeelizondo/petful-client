import React from 'react';
import AnimalSection from '../AnimalSection/AnimalSection';
import ApiService from '../ApiService/ApiService';
import AdoptionQueue from '../AdoptionQueue/AdoptionQueue';
import './AdoptionPage.css';

export default class AdoptionPage extends React.Component {
  state = { pets: { cats: [], dogs: [] }, people: [] };
  componentDidMount() {
    setInterval(this.dqPair, 5000);
    ApiService.getAllPets()
      .then((pets) => {
        this.setState({ pets });
      })
      .catch((error) => this.setState({ error }));
    ApiService.getAllPeople()
      .then((people) => {
        this.setState({ people });
      })
      .catch((error) => this.setState({ error }));
  }
  dqPair = () => {
    let pets = ['cat', 'dog'];
    let pet = pets[Math.floor(Math.random() * pets.length)];
    ApiService.dequeuePet(pet).then(() => {
      ApiService.getAllPets()
        .then((pets) => {
          this.setState({ pets });
        })
        .catch((error) => this.setState({ error }));
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="adoption-header">
          <h2>Pets currently up for adoption:</h2>
        </div>
        <div className="animals-section">
          <AnimalSection pet={this.state.pets.cats[0]} />
          <AnimalSection pet={this.state.pets.dogs[0]} />
        </div>
        <AdoptionQueue people={this.state.people} />
      </React.Fragment>
    );
  }
}

import React from 'react';
import './AnimalSection.css';

export default class AnimalSection extends React.Component {
  static defaultProps = {
    pet: {
      name: '',
      age: '',
      breed: '',
      description: '',
      gender: '',
      imageURL: '',
      story: '',
    },
  };
  render() {
    return (
      <div className="pet">
        <img src={this.props.pet.imageURL} alt={this.props.pet.description} />
        <h3>{this.props.pet.name}</h3>
        <div className="pet-details">
          <p>Age: {this.props.pet.age}</p>
          <p>Breed: {this.props.pet.breed}</p>
          <p>Gender: {this.props.pet.gender}</p>
          <p>Description: {this.props.pet.description}</p>
          <p>Story: {this.props.pet.story}</p>
        </div>
        <button>Adopt</button>
      </div>
    );
  }
}
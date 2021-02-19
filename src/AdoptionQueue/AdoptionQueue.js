import React from 'react';

export default class AdoptionQueue extends React.Component {
  static defaultProps = { people: [] };
  render() {
    return (
      <div>
        Current Adoption Queue:
        <div>
          {this.props.people.map((person, index) => {
            return (
              <p key={index}>
                {index + 1} : {person}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

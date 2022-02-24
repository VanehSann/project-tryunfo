import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li data-testid="attr1-card">{ cardAttr1 }</li>
          <li data-testid="attr2-card">{ cardAttr2 }</li>
          <li data-testid="attr3-card">{ cardAttr3 }</li>
        </ul>
        <p data-testid="rare-card">{ cardRare }</p>
        <p data-testid="trunfo-card">Super Trunfo</p>
      </div>
    );
  }
}

export default Card;

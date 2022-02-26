import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validando);
  }

validando = () => {
  const { cardName, cardDescription, cardImage } = this.state;
  const { cardAtr1, cardAttr2, cardAttr3 } = this.state;
  const textsCard = [cardName, cardDescription, cardImage];
  const isNotEmpty = textsCard.every((card) => card.length > 0);
  const numberCard = [cardAtr1, cardAttr2, cardAttr3];
  const isValid = numberCard.every((card) => card > 0 && card < 91);
  console.log(isNotEmpty);
  console.log(isValid);
  this.setState({
    isSaveButtonDisabled: !isNotEmpty && !isValid,

  });
}

render() {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
  return (
    <div>
      <h1>Tryunfo</h1>
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        onInputChange={ this.onInputChange }
        isSaveButtonDisabled={ isSaveButtonDisabled }
      />
      <Card
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        onInputChange={ this.onInputChange }
      />
    </div>
  );
}
}

export default App;

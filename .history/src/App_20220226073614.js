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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardArray: [],
      hasTrunfo: false,
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
  const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
  //
  const textsCard = [cardName, cardDescription, cardImage];
  const isNotEmpty = textsCard.every((card) => card.length > 0);
  //
  const numberCard = [cardAttr1, cardAttr2, cardAttr3];
  const noveUm = 91;
  const doisUmZero = 210;
  const isValid = numberCard.every((card) => card >= 0);
  const isMaValid = numberCard.every((card) => card < noveUm);
  const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) > doisUmZero;
  const testandoTudo = isNotEmpty && isValid && isMaValid && !sum;
  this.setState({
    isSaveButtonDisabled: !testandoTudo,
  });
}

onSaveButtonClick = (event) => {
  event.preventDefault();
  this.setState((prevState) => ({
    cardArray: [...prevState.cardArray, event],
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,

  }), this.validaCheck);
}

validaCheck = ({ target } ) => {
  console.log(target);
  const { cardArray } = target;
  console.log()
  console.log(cardArray)
  this.setState({
    hasTrunfo: true,
  });
};

render() {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo, cardArray } = this.state;
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
        onSaveButtonClick={ this.onSaveButtonClick }
        hasTrunfo={ hasTrunfo }
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

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
      filtro: '',
      raroFiltro: 'todas',
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
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;

  this.setState((prevState) => ({
    cardArray: [...prevState.cardArray, { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo }],
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

validaCheck = () => {
  this.setState((prevState) => ({
    hasTrunfo: prevState.cardArray.some((card) => card.cardTrunfo === true),
  }));
};

// Refêrencia de como apagar, filtrando, e depois atualizando.
// https://stackoverflow.com/questions/48077103/remove-item-from-array-in-react
onDeleteClick = ({ target }) => {
  const { cardArray } = this.state;
  const newCardList = cardArray.filter((newCard) => newCard.cardName !== target.id);
  this.setState({ cardArray: newCardList }, this.validaCheck);
}

//
handleInput = (event) => {
  this.setState({
    filtro: event.target.value,
    raroFiltro: event.target.value,
  });
}
//

render() {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
    cardRare, cardTrunfo, isSaveButtonDisabled,
    hasTrunfo, cardArray, filtro, raroFiltro } = this.state;
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
      {/* <div>
        {cardArray.map((card) => (
          <div key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              data-testid="delete-button"
              type="button"
              name={ card.cardName }
              id={ card.cardName }
              key={ card.cardName }
              onClick={ (event) => this.onDeleteClick(event) }
            >
              X
            </button>
          </div>
        ))}
      </div> */}
      <input
        data-testid="name-filter"
        type="text"
        id="filtro"
        onChange={ this.handleInput }
      />
      <select
        data-testid="rare-filter"
        id="raroFiltro"
        onChange={ this.handleInput }
      >
        <option>Todas</option>
        <option>normal</option>
        <option>raro</option>
        <option>muito raro</option>
      </select>
      {
        cardArray
          .filter((card) => card.cardName.includes(filtro))
          .filter((c) => (raroFiltro !== 'todas' ? c.cardRare.includes(raroFiltro) : ''))
          .map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                name={ card.cardName }
                id={ card.cardName }
                key={ card.cardName }
                onClick={ (event) => this.onDeleteClick(event) }
              >
                X
              </button>
            </div>
          ))
      }
    </div>
  );
}
}

export default App;

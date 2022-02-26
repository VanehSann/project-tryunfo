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
    }, () => {
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const { cardName } = this.state;
      this.setState({
        isSaveButtonDisabled:
        (this.validaTodos([cardName, cardAttr1, cardAttr2, cardAttr3])
        && this.validation(target.value)),
      });
    });
  }

  validation = (value) => {
    if (value.length > 0) {
      return false;
    }
    if (value.length <= 0) {
      return true;
    }
  }

  validationD = (value) => {
    const noveUm = 91;
    value = Number(value);
    if (value > 0 && value < noveUm) {
      return false;
    }
    return true;
  }

validaTodos = ([valueT, value, value2, value3]) => {
  const text = this.validation([valueT]);
  const valor1 = this.validationD(value);
  const valor2 = this.validationD([value2]);
  const valor3 = this.validationD([value3]);
  console.log(value, value2, value3);
  if (valor1 === true || valor2 === true || valor3 === true || text === true) {
    return true;
  }
  return false;
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

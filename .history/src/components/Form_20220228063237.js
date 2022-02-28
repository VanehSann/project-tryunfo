import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <textarea
            rows="10"
            cols="20"
            type="textarea"
            name="cardDescription"
            id="descricao"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input
            min="0"
            max="90"
            type="number"
            name="cardAttr1"
            id="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input
            min="0"
            max="90"
            name="cardAttr2"
            type="number"
            id="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input
            min="0"
            max="90"
            name="cardAttr3"
            type="number"
            id="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            name="cardImage"
            type="text"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare">
          Raridade
          <select
            name="cardRare"
            type="select"
            id="rare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        { hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
          : (
            <label htmlFor="trunfo">
              <input
                name="cardTrunfo"
                type="checkbox"
                id="trunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          )}
        <button
          name="isSaveButtonDisable"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          // onClick={ onSaveButtonClick }
        >
          Enviar
        </button>
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

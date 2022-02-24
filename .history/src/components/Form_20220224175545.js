import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form action="">
          <h1>Adicionar nova carta</h1>
          <div>
            <label htmlFor="name-input">
              Nome:
              <input
                type="text"
                name="cardName"
                data-testid="name-input"
                id="name-input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="description-input">
              Descrição:
              <textarea
                name="cardDescription"
                id="description-input"
                cols="30"
                rows="10"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="attr1-input">
              Primeiro Atributo:
              <input
                type="number"
                data-testid="attr1-input"
                name="cardAttr1"
                id="attr1-input"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="attr2-input">
              Segundo Atributo:
              <input
                type="number"
                data-testid="attr2-input"
                name="cardAttr2"
                id="attr2-input"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="attr3-input">
              Terceiro Atributo:
              <input
                type="number"
                data-testid="attr3-input"
                name="cardAttr3"
                id="attr3-input"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <label htmlFor="image-input">
              Imagem:
              <input
                type="text"
                name="cardImage"
                data-testid="image-input"
                id="image-input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
            <br />
            <p>Raridade:</p>
            <select
              name="cardRare"
              id="rarity-input"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
            <br />
            <label htmlFor="trunfo-input">
              Esta carta será o trunfo?
              <input
                type="checkbox"
                name="cardTrunfo"
                id="trunfo-input"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          </div>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
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

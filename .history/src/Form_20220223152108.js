import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <input type="text" data-testid="name-input" />
        <input type="textarea" data-testid="description-input" />
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <select type="select" data-testid="rare-input"><option>teste</option></select>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="text" data-testid="save-button">Botão</button>
      </>
    );
  }
}

export default Form;

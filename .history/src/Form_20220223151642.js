import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <input type='text' data-testid="name-input"></input>
        <input type='textarea' data-testid="description-input"></input>
        <input type='number' data-testid="attr1-input"></input>
        <input type='number' data-testid="attr2-input"></input>
        <input type='number' data-testid="attr3-input"></input>
        <input type='text' data-testid="image-input"></input>
        <select type='select' data-testid="rare-input"></select>
        <input type='checkbox' data-testid="trunfo-input"></input>
        <button type='text' data-testid="save-button"></button>
      </>
    )
  }
}
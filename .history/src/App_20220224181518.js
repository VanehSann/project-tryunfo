import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();

    
    this.state = {
      cardName: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form cardName={ cardName } onInputChange={ this.onInputChange } />
        <Card cardName={ cardName } onInputChange={ this.onInputChange }/>
      </div>
    );
  }
}

export default App;

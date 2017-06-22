import React, { Component } from 'react';
import { Form, Input, Grid, Thumbnail } from './bootstrap';
import service from './service';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], query: '' };
  }

  search(query) {
    if (query.length < 3) {
      this.setState({ query, cards: [] });
      return;
    }

    this.setState({ query });
    service.getCards(query).then((cards) => {
      if (query === this.state.query) {
        this.setState({ cards });
      }
    });
  }

  render() {
    const { query, cards } = this.state;
    return (
      <div className="container">
        <h1>Pokemon Search</h1>
        <Form>
          <Input label="Search" value={query} onChange={e => this.search(e.target.value) } />
        </Form>
        <Grid>
          {
            cards.map(card => (
              <Thumbnail src={card.imageUrl} name={card.name} key={card.id} />
            ))
          }
        </Grid>
      </div>
    );
  }
}

export default App;

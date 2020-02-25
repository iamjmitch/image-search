import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [], page: 1 };

  onFormSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 25, page: this.state.page }
    });
    this.setState({ images: this.state.images.concat(response.data.results) });
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

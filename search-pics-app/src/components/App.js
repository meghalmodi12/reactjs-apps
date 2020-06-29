import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = {
        totalImages : null,
        images: null
    }

    onFromSubmit = async (searchText) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: searchText }  
        });
        
        this.setState({
            totalImages : response.data.results.length,
            images : response.data.results
        });
    }

    render() {
        return (
        <div className="App container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit={this.onFromSubmit} />
            <ImageList images={this.state.images} />
        </div>
        );
    }
}

export default App;

import React from 'react';
import { 
  View,
  Text 
} from 'react-native'
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import MoviesAPI from './utils/api'
import Player from './src/player/containers/player'

export default class App extends React.Component {
  
  state = {
    suggestionList: [],
    categories: []
  }

  async componentDidMount() {
    const suggestions = await MoviesAPI.getSuggestions(10)
    const movies = await MoviesAPI.getMovies()

    this.setState({
      suggestionList: suggestions,
      categories: movies
    })
  }

  render() {
    return (
      <Home>

        <Header />
        <Text>Buscador</Text>

        <Player />        

        <CategoryList list={this.state.categories} />

        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
import React from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import MoviesAPI from './utils/api'
import Video from 'react-native-video'

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

        <View>
          <Video source={{uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"}}   // Can be a URL or a local file.
            style={styles.backgroundVideo} />
        </View>

        <CategoryList list={this.state.categories} />

        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
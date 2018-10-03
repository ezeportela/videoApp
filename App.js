import React, { Component } from 'react';
import { 
  Text 
} from 'react-native'
import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import API from './utils/api'
import Player from './src/player/containers/player'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';


type Props = {};
export default class App extends Component<Props> {
  
  state = {
  }

  async componentDidMount() {
    const categories = await API.getMovies()
    
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categories
      }
    })
    
    const suggestions = await API.getSuggestions(10)

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestions
      }
    })
  }

  render() {
    return (
      <Provider
        store={ store }
      >
         <PersistGate
          loading={<Text>cargando...</Text>}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Text>Buscador</Text>
            <Player />        
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
}
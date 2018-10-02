import React from 'react'

import {
  ImageBackground,
  Text,
  StyleSheet
} from 'react-native'

const SuggestionListLayout = props => {
  return (
    <ImageBackground 
      source={require('../../../assets/background.png')}
      style={styles.container}
    >
      <Text style={styles.text}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    flex: 1
  },

  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4c4c4c',
    marginBottom: 5
  }
})

export default SuggestionListLayout
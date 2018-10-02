import React from 'react'

import {
  View,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'

const Category = props => {
  const genre = (props.genres) ? props.genres[0] : "No category"

  return (
    (props.genres) ? 
      <ImageBackground 
        source={{ uri: props.background_image }}
        style={styles.container}
      >
        <Text style={styles.text}>{genre}</Text>
      </ImageBackground>
    : null
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 2
  },

  text: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0, .75)',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 0
  }
})

export default Category
import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

const Suggestion = props => {
  const genre = (props.genres) ? props.genres[0] : "No category"

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image 
          style={styles.cover}
          source={{
            uri: props.medium_cover_image
          }}
        />
        <View style={styles.genreContainer}>
          <Text style={styles.genreText}>{genre}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>{props.year}</Text>
        <Text style={styles.rating}>{props.rating} Estrellas</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

  cover: {
    width: 100,
    height: 150,
    resizeMode: 'contain'
  },

  genreContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    paddingVertical: 5,
    paddingHorizontal: 7
  },

  genreText: {
    color: 'white',
    fontSize: 11
  },

  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 18,
    color: '#44546b'
  },

  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },

  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
})

export default Suggestion
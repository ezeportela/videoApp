import React from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

const SuggestionListLayout = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 7,
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
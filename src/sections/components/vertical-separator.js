import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

const VerticalSeparator = props => {
  return (
    <View style={[
        styles.separator,
        {
          borderTopColor: props.color || '#eaeaea'
        }
      ]}>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
})

export default VerticalSeparator
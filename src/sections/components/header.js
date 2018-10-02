import React from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native'

const Header = props => {
  return (
    <View style={styles.header}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/icon.png')}
            style={styles.logo}
          />
          <View style={styles.logoTitle}>
            <Text>Video App</Text>
          </View>
          <View style={styles.right}>
            {props.children}
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },

  container: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    flexDirection: 'row',

  },

  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  logoTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5
  },

  right: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default Header
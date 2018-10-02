import React, { Component } from 'react'
import {
	View,
	StyleSheet
} from 'react-native'
import { Video } from 'expo'
import Layout from '../components/layout'


class Player extends Component {
	render() {
		return (
			<Layout
				video={
					<Video
					  source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
					  rate={1.0}
					  volume={1.0}
					  isMuted={false}
					  resizeMode="contain"
					  shouldPlay
					  isLooping
					  style={styles.video}
					  useNativeControls
					/>
				}
			/>
		)
	}
}

const styles = StyleSheet.create({
	video: {
		position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
	}
})

export default Player
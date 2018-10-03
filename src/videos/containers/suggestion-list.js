import React, { Component } from 'react'

import { 
  FlatList} from 'react-native'

import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    list: state.suggestions
  }
}

class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  renderItem = ({item}) => <Suggestion {...item} />
  renderEmptyList = () => <Empty text="No hay ninguna sugerencia para ti." />
  renderSeparator = () => <Separator />

  render() {
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmptyList}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(SuggestionList)
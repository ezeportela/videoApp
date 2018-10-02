import React, { Component } from 'react'

import { 
  FlatList
} from 'react-native'

import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import Separator from '../../sections/components/horizontal-separator'
import Category from '../components/category'

class CategoryList extends Component {
  keyExtractor = item => item.id.toString()
  renderItem = ({item}) => <Category {...item} />
  renderEmptyList = () => <Empty text="No hay ninguna categoría." />
  renderSeparator = () => <Separator />

  render() {
    return (
      <Layout title="Categorías">
        <FlatList
          horizontal
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

export default CategoryList
import { useContext } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'

import { DataContext } from '../contexts/DataContext'

import LikedCat from '../components/LikedCat'

const LikedCats = () => {
  const { likedCats } = useContext(DataContext)

  return (
    <View style={styles.container}>
      <FlatList
        data={likedCats ?? []}
        numColumns={2}
        style={styles.content}
        renderItem={({ item }) => <LikedCat cat={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
  }
})

export default LikedCats

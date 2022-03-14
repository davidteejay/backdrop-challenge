import { useContext } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { DataContext } from '../contexts/DataContext'
import Text from './Text'

const Cat = ({ cat }) => {
  const { likedCats, addCat, removeCat } = useContext(DataContext)
  const isLiked = !!likedCats.find((item) => item.id === cat.id)

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: cat.image?.url }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16 }}>{cat.name}</Text>
      </View>
      <TouchableOpacity onPress={() => (isLiked ? removeCat(cat.id) : addCat(cat))}>
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={22}
          color={isLiked ? 'red' : '#555'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    height: 40,
    width: 40,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
})

export default Cat

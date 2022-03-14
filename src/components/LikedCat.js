import { useContext } from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { DataContext } from '../contexts/DataContext'
import Text from './Text'

const LikedCat = ({ cat }) => {
  const { removeCat } = useContext(DataContext)

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
        source={{ uri: cat.image?.url }}
      />
      <View style={styles.content}>
        <Text style={{ fontSize: 16 }}>{cat.name}</Text>
        <TouchableOpacity onPress={() => removeCat(cat.id)}>
          <Ionicons
            name="heart"
            size={22}
            color="red"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: ((Dimensions.get('window').width - 40) / 2) - 10,
  },
  image: {
    borderRadius: 10,
    height: 150,
    width: '100%',
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
})

export default LikedCat

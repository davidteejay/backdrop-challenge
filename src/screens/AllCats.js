import { useState, useEffect } from 'react'
import {
  View,
  Alert,
  StyleSheet,
  RefreshControl,
  FlatList,
} from 'react-native'
import axios from 'axios'

import Cat from '../components/Cat'

const X_API_KEY = '9fc34df4-f194-4b9e-835e-d4fc9492a9b4'
const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

const AllCats = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    getCats()
  }, [])

  const getCats = () => {
    setLoading(true)

    axios
      .get(BASE_URL, {
        headers: {
          'x-api-key': X_API_KEY,
        },
      })
      .then(({ data }) => {
        console.log(data)
        setData(data)
      })
      .catch((err) => {
        Alert.alert(
          '',
          err?.response?.data?.message ?? err?.message,
          [
            { text: 'Cancel' },
            { text: 'Try Again', onPress: getCats }
          ]
        )
      })
      .finally(() => setLoading(false))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.content}
        renderItem={({ item }) => <Cat cat={item} />}
        keyExtractor={(item) => item.id}
        refreshControl={(
          <RefreshControl
            colors={['blue']}
            tintColor="blue"
            refreshing={loading}
            onRefresh={getCats}
          />
        )}
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
    padding: 20,
  }
})

export default AllCats

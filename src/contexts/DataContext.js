import {
  useState,
  createContext,
  useEffect,
} from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Loader from '../components/Loader'

export const DataContext = createContext()

const DataContextProvider = ({ children }) => {
  const [likedCats, setLikedCats] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    // AsyncStorage.clear()

    const cats = await AsyncStorage.getItem('likedCats')
    if (cats) setLikedCats(JSON.parse(cats))

    setLoading(false)
  }

  const setCats = (cats) => {
    setLikedCats(cats)
    AsyncStorage.setItem('likedCats', JSON.stringify(cats))
  }

  const addCat = (cat) => {
    setCats([...likedCats, cat])
  }

  const removeCat = (catId) => {
    const newCats = likedCats.filter((cat) => cat.id !== catId)
    setCats(newCats)
  }

  useEffect(() => {
    getData()
  }, [])

  const state = {
    likedCats,
    addCat,
    removeCat,
  }

  return (
    <View style={{ flex: 1 }}>
      {loading
        ? <Loader />
        : (
          <DataContext.Provider value={state}>
            {children}
          </DataContext.Provider>
        )}
    </View>
  )
}

export default DataContextProvider

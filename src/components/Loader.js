import React from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

const Loader = ({
  backgroundColor = '#fff',
  containerStyle = {},
  color = 'blue',
  size = 'large',
  inline = false,
}) => {
  return (
    <View style={[styles.loader, !inline && styles.full, { backgroundColor }, containerStyle]}>
      <ActivityIndicator
        color={color}
        animating
        size={size}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
})

export default Loader

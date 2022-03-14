import { StyleSheet, Text, View } from 'react-native'

import Navigation from './src/navigation'
import DataContextProvider from './src/contexts/DataContext';

export default function App() {
  return (
    <View style={styles.container}>
      <DataContextProvider>
        <Navigation />
      </DataContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import AllCats from '../screens/AllCats'
import LikedCats from '../screens/LikedCats'

import CatIcon from '../../assets/cat.svg'
import { normalize } from '../components/Text'

const Navigation = () => {
  const Tabs = createBottomTabNavigator()

  const styles = {
    header: {
      backgroundColor: '#fff',
    },
  }

  const options = {
    headerTitleAlign: 'left',
    headerStyle: styles.header,
    headerShadowVisible: false,
    tabBarActiveTintColor: '#000',
    tabBarLabelStyle: { fontSize: normalize(13) },
  }

  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{

        }}
      >
        <Tabs.Screen
          options={{
            title: 'All Cats',
            tabBarIcon: ({ focused }) => <CatIcon color={focused ? '#000' : '#848484'} />,
            ...options,
          }}
          component={AllCats}
          name="AllCats"
        />
        <Tabs.Screen
          options={{
            title: 'Cats I Like',
            tabBarIcon: ({ focused }) =>  <Ionicons color={focused ? '#000' : '#848484'} name="heart" size={22} />,
            ...options,
          }}
          component={LikedCats}
          name="LikedCats"
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

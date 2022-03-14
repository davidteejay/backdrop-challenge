import { Text } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const normalize = (size) => {
  return RFValue(size, 844)
}

const fontSize = 16

export default ({ style = {}, children, ...props }) => {
  const normalized = normalize(style?.fontSize ?? fontSize)

  return (
    <Text
      style={{
        ...style,
        fontSize: normalized,
      }}
      allowFontScaling
      {...props}
    >
      {children}
    </Text>
  )
}

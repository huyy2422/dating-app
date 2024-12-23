import { View, Text } from 'react-native'
import React, { use } from 'react'

export default function WelcomeScreen() {

    const [fontsLoaded, fontError] = useFonts({
        SpaceGroteskSemiBold: require('../fonts/SpaceGrotesk-SemiBold.ttf'),
        SpaceGroteskRegular: require('../fonts/SpaceGrotesk-Regular.ttf'),
        SpaceGroteskMedium: require('../fonts/SpaceGrotesk-Medium.ttf'),
        SpaceGroteskBold: require('../fonts/SpaceGrotesk-Bold.ttf'),
        SpaceGroteskLight: require('../fonts/SpaceGrotesk-Light.ttf'),
    })
  return (
    <View>
      <Text>WelcomeScreen</Text>
    </View>
  )
}
import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Swiper from 'react-native-deck-swiper'
import { NavigationInjectedProps } from "react-navigation"
import { Text } from "../../components"
import { color } from "../../theme"

const FULL: ViewStyle = { flex: 1 }
const CARD: ViewStyle = {
  flex: 1,
  borderRadius: 10,
  borderWidth: 10,
  borderColor: color.primary,
  justifyContent: "center",
  backgroundColor: color.primaryDarker
}
const TEXT: TextStyle = {
  textAlign: "center",
  fontSize: 50,
  backgroundColor: "transparent"
}

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> { }

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
  // const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
  //   props.navigation,
  // ])

  return (
    <View style={FULL}>
      <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={(card) => {
          return (
            <View style={CARD}>
              <Text style={TEXT}>{card}</Text>
            </View>
          )
        }}
        onSwiped={(cardIndex) => { console.log(cardIndex) }}
        onSwipedAll={() => { console.log('onSwipedAll') }}
        cardIndex={0}
        backgroundColor={color.background}
        stackSize={3} />
    </View>
  )
}

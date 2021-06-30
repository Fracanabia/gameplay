import React from 'react'
import {
  Image,
  StatusBar,
  Text,
  View
} from 'react-native'
import IllustrationImg from '../assets/illustration.png'
import { ButtonIcon } from '../components/ButtonIcon'
import { styles } from './styles'

export function SignIn() {
  return (
    <View
      style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        style={styles.image}
        source={IllustrationImg}
        resizeMode="center"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title='Entrar em discord'
          activeOpacity={0.7} />

      </View>



    </View>
  )
}